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
  
    var self = this;
    this.SingleDish;
    this.selectedDishes = [];
    
    
    this.DishSearch = $resource('http://api.bigoven.com/recipes',{pg:1,rpp:25,api_key:'H9n1zb6es492fj87OxDtZM9s5sb29rW3'});
    
    this.Dish = $resource('http://api.bigoven.com/recipe/:id',{api_key:'H9n1zb6es492fj87OxDtZM9s5sb29rW3'});
    
    
    this.getDish = function(Dishid){
        
        self.SingleDish = self.Dish.get({id:Dishid})
        return self.SingleDish;
    }
    
    for (i in $cookieStore.get('selectedDishes')) {
        console.log("FETCHING DISHES");
        var id = $cookieStore.get('selectedDishes')[i];
        this.selectedDishes.push(self.getDish(id));
    }
   
    if($cookieStore.get("numberOfGuests")) {
        this.numberOfGuests = $cookieStore.get("numberOfGuests");
        console.log("number of guests:" + $cookieStore.get("numberOfGuests"));
    }
    else {
        this.numberOfGuests = 1;
    }
    
    
    this.numberOfGuests = $cookieStore.get('numberOfGuests');

    
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
        
        return totalprice;
	}

	//Adds the passed dish to the menu. If the dish of that type already exists on the menu
	//it is removed from the menu and the new one added. (getSelectedDishes work here)

    
	this.addDishToMenu = function() {
        var array = []; //array of id
        
		var length = this.selectedDishes.length;
        var SeDishes = this.selectedDishes;
        console.log(this.selectedDishes);
        //var index = this.selectedDishes.indexOf(self.SingleDish);
        //TODO Lab 2 
        for (i=0; i<length;i++) {
            console.log(SeDishes[i].Category);
            if(SeDishes[i].Category === self.SingleDish.Category) {
                SeDishes.splice(i,1);
            }; 
            
        };
        self.selectedDishes = SeDishes;
        
        for (i in self.selectedDishes) {
            array.push(self.selectedDishes[i].RecipeID);
        };
        
        self.selectedDishes.push(self.SingleDish);
        array.push(self.SingleDish.RecipeID);
        
        $cookieStore.put("selectedDishes", array);
        
        console.log(array);
    
	}
	//Removes dish from menu
	this.removeDishFromMenu = function(id) {

        var index = this.selectedDishes.indexOf(self.SingleDish);
        this.selectedDishes.splice(index,1);
        $cookieStore.remove(id);
       
	}
    

	//function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
	//you can use the filter argument to filter out the dish by name or ingredient (use for search)
	//if you don't pass any filter all the dishes will be returned
 

    
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