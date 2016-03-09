dinnerPlannerApp.controller('PrepareCtrl', function($scope,Dinner){
    
    $scope.finalMenu = Dinner.selectedDishes;
    
});