// Dinner controller that we use whenever we have view that needs to 
// display or modify the dinner menu
dinnerPlannerApp.controller('DinnerCtrl', function ($scope,Dinner) {

  $scope.numberOfGuests = Dinner.getNumberOfGuests();

  $scope.setNumberOfGuest = function(number){
    Dinner.setNumberOfGuests(number);
    
  }

  $scope.getNumberOfGuests = function() {
    return Dinner.getNumberOfGuests();
  }

  // TODO in Lab 5: Implement the methods to get the dinner menu
  // add dish to menu and get total menu price
  $scope.menu = Dinner.selectedDishes;
    
  $scope.getMenu = function() {
      return Dinner.selectedDishes;
  }
    
  $scope.addDish = function(){
      Dinner.addDishToMenu();
  }
  
  $scope.removeDish = function(id){
      Dinner.removeDishFromMenu(id);
  }
  
  $scope.getTotalPrice = function() {
    return Dinner.getTotalMenuPrice();
  }
  
  $scope.getPrice = function(dish){
      
      var price = 0;
      for (j in dish.Ingredients){
                
          price += dish.Ingredients[j].Quantity * this.numberOfGuests;
                
      }
      
      return price;
  }
  
});