dinnerPlannerApp.controller('OverviewCtrl', function($scope,Dinner){
    
    $scope.overviewMenu = Dinner.selectedDishes;
    
});