var singleDishController = function(view, model){
    
    $("#addDish").click(function(){
        model.addDishToMenu(model.singleDish.RecipeID);
        stateController.currentSideController = new SideMenuController(stateController.currentSideView,model);
    });
    
    $("#backToSelect").click(function(){
        console.log("back to select");
        
        stateController.singleDishView.container.hide();
        stateController.indexView.container.show();
        $("#DISH").empty();
        //stateController.indexView.update1();
        //stateController.currentMainController = new indexController(stateController.indexView,model);
        //stateController.currentSideController = new SideMenuController(stateController.currentSideView,model);
    })
}