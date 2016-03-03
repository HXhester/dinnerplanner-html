//DinnerModel Object constructor
var DinnerModel = function() {
 
	//TODO Lab 2 implement the data structure that will hold number of guest
	// and selected dinner options for dinner menu
    this.selectedDishes = []; // an list of dishes
    this.singleDish;
    this.numberOfGuests = 1;
    this.observers = [];
    this.dishes = [];
    
	this.setNumberOfGuests = function(num) {
		//TODO Lab 2
        this.numberOfGuests = num;
        //console.log(this);
        this.notifyObservers("changeNumOfGuests");
    
	}

	// should return 
	this.getNumberOfGuests = function() {
		//TODO Lab 2
        return this.numberOfGuests;
	}

	//Returns the dish that is on the menu for selected type 
	this.getSelectedDish = function(type) {
		//TODO Lab 2
        for (i in this.selectedDishes) {
            if(type === this.selectedDishes[i].Category) {
                return this.selectedDishes[i].Title;
                // add a <span> in index.html to show the seleted dish with type
            }
        }
	}

	//Returns all the dishes on the menu.
	this.getFullMenu = function() {
		//TODO Lab 2
        
        //return dishes;
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
        return ing;            // maybe for shoppinglist
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
        //this.getDish(id);
        var index = this.selectedDishes.indexOf(this.singleDish);
        var SeDishes = this.selectedDishes;
        //TODO Lab 2 
        for (i=0; i<length;i++) {

            //console.log(this.selectedDishes[i].Category);
            //console.log(this.getDish(id).Category);
            if(SeDishes[i].Category === this.singleDish.Category) {
            SeDishes.splice(index,1);
            }; 
            
        };
        SeDishes.push(this.singleDish);
        this.selectedDishes = SeDishes;

        this.notifyObservers("addDish");
//        for (i=0; i<length;i++) {
//            if(this.selectedDishes[i].type === this.getDish(id).type) {
//            this.selectedDishes.splice(index,1);
//            }; 
//            
//        };
//        this.selectedDishes.push(this.getDish(id));
//        console.log(this.selectedDishes);
//        this.notifyObservers();
        
	}
	//Removes dish from menu
	this.removeDishFromMenu = function(id) {
		//TODO Lab 2
        //this.getDish(id);
        var index = this.selectedDishes.indexOf(this.singleDish);
        this.selectedDishes.splice(index,1);
        this.notifyObservers("removeDish");
	}
    

	//function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
	//you can use the filter argument to filter out the dish by name or ingredient (use for search)
	//if you don't pass any filter all the dishes will be returned
    
    var self = this;
	this.getAllDishes = function (type,filter) {
        var apiKey = "8vtk7KykflO5IzB96kb0mpot0sU40096";
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
	  
        var apiKey = "8vtk7KykflO5IzB96kb0mpot0sU40096";
        var recipeID = id;
        var url = "http://api.bigoven.com/recipe/" + recipeID + "?api_key=" + apiKey;

        $.ajax({
            type: "GET",
            dataType: 'json',
            cache: false,
            url: url,
            success: function (data) {
                alert('success');
                self.singleDish = data;
                self.notifyObservers("getDish");
            },
            error: function(){
                alert('Internet disconnected!');
            },
            beforeSend:function(){
            // show gif here, eg:
                $("#singleDish").hide();
                $("#loading").show();
            },
            complete:function(){
            // hide gif here, eg:
                $("#loading").hide();
                $("#singleDish").show();
            }
        });
    }
        
//        for(key in dishes){
//			if(dishes[key].id == id) {
//				return dishes[key];
//			}
//		}
    
    this.getDishWithName = function(name){
        for(key in this.selectedDishes){
            if(this.selectedDishes[key].name === name){
                return this.selectedDishes[key].id;
            }
        }
    }

//-----------------------------------------------lab 3--------------------------------------------------
    
    // add new observer to the array
    this.addObserver = function (observer) {    
        
        this.observers.push(observer);    
        
    };
    
    //call the update method on all the observers in the array
    this.notifyObservers=function(obj) {
        //console.log(this.observers);
        for( var i=0; i<this.observers.length; i++){
            this.observers[i](obj);
        }
    };
    
	// the dishes variable contains an array of all the 
	// dishes in the database. each dish has id, name, type,
	// image (name of the image file), description and
	// array of ingredients. Each ingredient has name, 
	// quantity (a number), price (a number) and unit (string 
	// defining the unit i.e. "g", "slices", "ml". Unit
	// can sometimes be empty like in the example of eggs where
	// you just say "5 eggs" and not "5 pieces of eggs" or anything else.

    var dishes = [];
//    var dishes = [{
//		'id':1,
//		'name':'French toast',
//		'type':'starter',
//		'image':'toast.jpg',
//		'description':"In a large mixing bowl, beat the eggs. Add the milk, brown sugar and nutmeg; stir well to combine. Soak bread slices in the egg mixture until saturated. Heat a lightly oiled griddle or frying pan over medium high heat. Brown slices on both sides, sprinkle with cinnamon and serve hot.",
//		'ingredients':[{ 
//			'name':'eggs',
//			'quantity':0.5,
//			'unit':'',
//			'price':10
//			},{
//			'name':'milk',
//			'quantity':30,
//			'unit':'ml',
//			'price':6
//			},{
//			'name':'brown sugar',
//			'quantity':7,
//			'unit':'g',
//			'price':1
//			},{
//			'name':'ground nutmeg',
//			'quantity':0.5,
//			'unit':'g',
//			'price':12
//			},{
//			'name':'white bread',
//			'quantity':2,
//			'unit':'slices',
//			'price':2
//			}]
//		},{
//		'id':2,
//		'name':'Sourdough Starter',
//		'type':'starter',
//		'image':'sourdough.jpg',
//		'description':"Here is how you make it... Lore ipsum...",
//		'ingredients':[{ 
//			'name':'active dry yeast',
//			'quantity':0.5,
//			'unit':'g',
//			'price':4
//			},{
//			'name':'warm water',
//			'quantity':30,
//			'unit':'ml',
//			'price':0
//			},{
//			'name':'all-purpose flour',
//			'quantity':15,
//			'unit':'g',
//			'price':2
//			}]
//		},{
//		'id':3,
//		'name':'Baked Brie with Peaches',
//		'type':'starter',
//		'image':'bakedbrie.jpg',
//		'description':"Here is how you make it... Lore ipsum...",
//		'ingredients':[{ 
//			'name':'round Brie cheese',
//			'quantity':10,
//			'unit':'g',
//			'price':8
//			},{
//			'name':'raspberry preserves',
//			'quantity':15,
//			'unit':'g',
//			'price':10
//			},{
//			'name':'peaches',
//			'quantity':1,
//			'unit':'',
//			'price':4
//			}]
//		},{
//		'id':100,
//		'name':'Meat balls',
//		'type':'main dish',
//		'image':'meatballs.jpg',
//		'description':"Preheat an oven to 400 degrees F (200 degrees C). Place the beef into a mixing bowl, and season with salt, onion, garlic salt, Italian seasoning, oregano, red pepper flakes, hot pepper sauce, and Worcestershire sauce; mix well. Add the milk, Parmesan cheese, and bread crumbs. Mix until evenly blended, then form into 1 1/2-inch meatballs, and place onto a baking sheet. Bake in the preheated oven until no longer pink in the center, 20 to 25 minutes.",
//		'ingredients':[{ 
//			'name':'extra lean ground beef',
//			'quantity':115,
//			'unit':'g',
//			'price':20
//			},{
//			'name':'sea salt',
//			'quantity':0.7,
//			'unit':'g',
//			'price':3
//			},{
//			'name':'small onion, diced',
//			'quantity':0.25,
//			'unit':'',
//			'price':2
//			},{
//			'name':'garlic salt',
//			'quantity':0.7,
//			'unit':'g',
//			'price':2
//			},{
//			'name':'Italian seasoning',
//			'quantity':0.6,
//			'unit':'g',
//			'price':3
//			},{
//			'name':'dried oregano',
//			'quantity':0.3,
//			'unit':'g',
//			'price':3
//			},{
//			'name':'crushed red pepper flakes',
//			'quantity':0.6,
//			'unit':'g',
//			'price':3
//			},{
//			'name':'Worcestershire sauce',
//			'quantity':6,
//			'unit':'ml',
//			'price':7
//			},{
//			'name':'milk',
//			'quantity':20,
//			'unit':'ml',
//			'price':4
//			},{
//			'name':'grated Parmesan cheese',
//			'quantity':5,
//			'unit':'g',
//			'price':8
//			},{
//			'name':'seasoned bread crumbs',
//			'quantity':15,
//			'unit':'g',
//			'price':4
//			}]
//		},{
//		'id':101,
//		'name':'MD 2',
//		'type':'main dish',
//		'image':'bakedbrie.jpg',
//		'description':"Here is how you make it... Lore ipsum...",
//		'ingredients':[{ 
//			'name':'ingredient 1',
//			'quantity':1,
//			'unit':'pieces',
//			'price':8
//			},{
//			'name':'ingredient 2',
//			'quantity':15,
//			'unit':'g',
//			'price':7
//			},{
//			'name':'ingredient 3',
//			'quantity':10,
//			'unit':'ml',
//			'price':4
//			}]
//		},{
//		'id':102,
//		'name':'MD 3',
//		'type':'main dish',
//		'image':'meatballs.jpg',
//		'description':"Here is how you make it... Lore ipsum...",
//		'ingredients':[{ 
//			'name':'ingredient 1',
//			'quantity':2,
//			'unit':'pieces',
//			'price':8
//			},{
//			'name':'ingredient 2',
//			'quantity':10,
//			'unit':'g',
//			'price':7
//			},{
//			'name':'ingredient 3',
//			'quantity':5,
//			'unit':'ml',
//			'price':4
//			}]
//		},{
//		'id':103,
//		'name':'MD 4',
//		'type':'main dish',
//		'image':'meatballs.jpg',
//		'description':"Here is how you make it... Lore ipsum...",
//		'ingredients':[{ 
//			'name':'ingredient 1',
//			'quantity':1,
//			'unit':'pieces',
//			'price':4
//			},{
//			'name':'ingredient 2',
//			'quantity':12,
//			'unit':'g',
//			'price':7
//			},{
//			'name':'ingredient 3',
//			'quantity':6,
//			'unit':'ml',
//			'price':4
//			}]
//		},{
//		'id':200,
//		'name':'Chocolat Ice cream',
//		'type':'dessert',
//		'image':'icecream.jpg',
//		'description':"Here is how you make it... Lore ipsum...",
//		'ingredients':[{ 
//			'name':'ice cream',
//			'quantity':100,
//			'unit':'ml',
//			'price':6
//			}]
//		},{
//		'id':201,
//		'name':'Vanilla Ice cream',
//		'type':'dessert',
//		'image':'icecream.jpg',
//		'description':"Here is how you make it... Lore ipsum...",
//		'ingredients':[{ 
//			'name':'ice cream',
//			'quantity':100,
//			'unit':'ml',
//			'price':6
//			}]
//		},{
//		'id':202,
//		'name':'Strawberry',
//		'type':'dessert',
//		'image':'icecream.jpg',
//		'description':"Here is how you make it... Lore ipsum...",
//		'ingredients':[{ 
//			'name':'ice cream',
//			'quantity':100,
//			'unit':'ml',
//			'price':6
//			}]
//		}
//	];

}
