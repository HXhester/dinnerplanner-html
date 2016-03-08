// Here we create an Angular service that we will use for our 
// model. In your controllers (or other services) you can include the
// dependency on any service you need. Angular will insure that the
// service is created first time it is needed and then just reuse it
// the next time.
dinnerPlannerApp.factory('Dinner',function ($resource) {

  // TODO in Lab 5: Add your model code from previous labs
  // feel free to remove above example code
  // you will need to modify the model (getDish and getAllDishes) 
  // a bit to take the advantage of Angular resource service
  // check lab 5 instructions for details

    this.selectedDishes = []; // an list of dishes
    this.singleDish;
    this.numberOfGuests = 1;
    this.observers = [];
    this.dishes = [];
    
	this.setNumberOfGuests = function(num) {
        
        this.numberOfGuests = num;
    
	}

	// should return 
	this.getNumberOfGuests = function() {

        return this.numberOfGuests;
	}

	//Returns the dish that is on the menu for selected type 
	this.getSelectedDish = function(type) {

        for (i in this.selectedDishes) {
            if(type === this.selectedDishes[i].Category) {
                return this.selectedDishes[i].Title;
            
            }
        }
	}

	//Returns all the dishes on the menu.
	this.getFullMenu = function() {

        return this.selectedDishes;
    }
        

	//Returns all ingredients for all the dishes on the menu.
	this.getAllIngredients = function(id) {
		//TODO Lab 2
        var length = this.getDish(id).Ingredients.length;
        
        var ing=[];
        for(i=0;i<length;i++){
            ing.push(this.getDish(id).Ingredients[i].Title);
        }
        return ing; 
    }
	

	//Returns the total price of the menu (all the ingredients multiplied by number of guests).
	this.getTotalMenuPrice = function() {
        //TODO Lab 2
        var totalprice = 0;
        for (i in this.selectedDishes) {
            for (j in this.selectedDishes[i].Ingredients){
                
                totalprice += this.selectedDishes[i].Ingredients[j].Quantity * this.numberOfGuests;
                
            }
        }
        return totalprice;
	}

	//Adds the passed dish to the menu. If the dish of that type already exists on the menu
	//it is removed from the menu and the new one added. (getSelectedDishes work here)

	this.addDishToMenu = function(id) {
		var length = this.selectedDishes.length;
        var index = this.selectedDishes.indexOf(this.singleDish);
        var SeDishes = this.selectedDishes;
        //TODO Lab 2 
        for (i=0; i<length;i++) {

            if(SeDishes[i].Category === this.singleDish.Category) {
            SeDishes.splice(index,1);
            }; 
            
        };
        SeDishes.push(this.singleDish);
        this.selectedDishes = SeDishes;
        
	}
	//Removes dish from menu
	this.removeDishFromMenu = function(id) {

        var index = this.selectedDishes.indexOf(this.singleDish);
        this.selectedDishes.splice(index,1);
       
	}
    

	//function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
	//you can use the filter argument to filter out the dish by name or ingredient (use for search)
	//if you don't pass any filter all the dishes will be returned
    
    var self = this;
	this.getAllDishes = function (type,filter) {
        var apiKey = "18f3cT02U9f6yRl3OKDpP8NA537kxYKu";
        var titleKeyword = filter;
        var titleKeyword2 = type;
        var url = "http://api.bigoven.com/recipes?pg=1&rpp=24&title_kw=" + titleKeyword + "&any_kw=" + titleKeyword2 + "&api_key=" + apiKey;
        
        $.ajax({
            type: "GET",
            dataType: 'json',
            cache: false,
            url: url,
//TODO:when the data is loading, create a gif in indexview with id="loading"----//
            beforeSend:function(){
            // show gif here, eg:
                console.log("LOADING");
                $("#table").hide();
                $("#loading").show();
            },
            complete:function(){
            // hide gif here, eg:
                $("#loading").hide();
                $("#table").show();
            },
//-------------------------------------------------------------------------------//
            success: function (data) {
                //alert('success');
                self.dishes = data.Results;
                //as a sign that data reading is finished,
                self.notifyObservers("dishesAvailable");
            },
//TODO: When internet is not working----------------------------------------------//
            error: function(){
                alert('Internet disconnected!');
            }
        });
        
    }	

	//function that returns a dish of specific ID
	this.getDish = function (id) {
	  
        var apiKey = "18f3cT02U9f6yRl3OKDpP8NA537kxYKu";
        var recipeID = id;
        var url = "http://api.bigoven.com/recipe/" + recipeID + "?api_key=" + apiKey;

        $.ajax({
            type: "GET",
            dataType: 'json',
            cache: false,
            url: url,
            success: function (data) {
                //alert('success');
                self.singleDish = data;
                self.notifyObservers("getDish");
            },
            error: function(){
                alert('Internet disconnected!');
            },
            beforeSend:function(){
            // show gif here, eg:
                console.log("LOADING SINGLE DISH");

                $("#singleDish").hide();
                $("#loadingSingledish").show();
            },
            complete:function(){
            // hide gif here, eg:
                $("#loadingSingledish").hide();
                $("#singleDish").show();
            }
        });
    }
        
    this.getDishWithName = function(name){
        for(key in this.selectedDishes){
            if(this.selectedDishes[key].name === name){
                return this.selectedDishes[key].id;
            }
        }
    }



  // Angular service needs to return an object that has all the
  // methods created in it. You can consider that this is instead
  // of calling var model = new DinnerModel() we did in the previous labs
  // This is because Angular takes care of creating it when needed.
  return this;

});