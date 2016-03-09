// Here we create an Angular service that we will use for our 
// model. In your controllers (or other services) you can include the
// dependency on any service you need. Angular will insure that the
// service is created first time it is needed and then just reuse it
// the next time.
dinnerPlannerApp.factory('Dinner',function ($resource,$cookieStore) {

  // TODO in Lab 5: Add your model code from previous labs
  // feel free to remove above example code
  // you will need to modify the model (getDish and getAllDishes) 
  // a bit to take the advantage of Angular resource service
  // check lab 5 instructions for details

    this.selectedDishes=[]; // should be set by cookies
    
	this.setNumberOfGuests = function(num) {
        
        this.numberOfGuests = num;
        
        
        $cookieStore.put('numberOfGuest', num);
    
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
	this.getAllIngredients = function() {
		//TODO Lab 2
        console.log(self.SingleDish.Ingredients);
        var length = self.SingleDish.Ingredients.length;
        var ing=[];
        for(i=0;i<length;i++){
            
            ing.push(self.SingleDish.Ingredients[i].Title);
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
        console.log(totalprice);
        return totalprice;
	}

	//Adds the passed dish to the menu. If the dish of that type already exists on the menu
	//it is removed from the menu and the new one added. (getSelectedDishes work here)

	this.addDishToMenu = function() {
		var length = this.selectedDishes.length;
        //var index = this.selectedDishes.indexOf(self.SingleDish);
        var SeDishes = this.selectedDishes;
        //TODO Lab 2 
        for (i=0; i<length;i++) {

            if(SeDishes[i].Category === self.SingleDish.Category) {
                SeDishes.splice(i,1);
            }; 
            
        };
        SeDishes.push(self.SingleDish);
        self.selectedDishes = SeDishes;
        
	}
	//Removes dish from menu
	this.removeDishFromMenu = function(id) {

        var index = this.selectedDishes.indexOf(self.SingleDish);
        this.selectedDishes.splice(index,1);
       
	}
    

	//function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
	//you can use the filter argument to filter out the dish by name or ingredient (use for search)
	//if you don't pass any filter all the dishes will be returned
    
    this.DishSearch = $resource('http://api.bigoven.com/recipes',{pg:1,rpp:25,api_key:'18f3cT02U9f6yRl3OKDpP8NA537kxYKu'});
    
    this.Dish = $resource('http://api.bigoven.com/recipe/:id',{api_key:'18f3cT02U9f6yRl3OKDpP8NA537kxYKu'}); 
    
    var self = this;
    this.SingleDish;
    this.getDish = function(Dishid){
        
        self.SingleDish = self.Dish.get({id:Dishid})
        return self.SingleDish;
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