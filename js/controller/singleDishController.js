var singleDishController = function(view, model,Id){
    
    $("#addDish").click(function(){
        model.addDishToMenu(Id);
        stateController.currentSideController = new SideMenuController(stateController.currentSideView,model);
    });
    
    $("#backToSelect").click(function(){
       // console.log("back to select");
        stateController.indexView.container.show();
        view.empty();
        stateController.indexView.update1();
        stateController.currentMainController = new indexController(stateController.indexView,model);
        stateController.currentSideController = new SideMenuController(stateController.currentSideView,model);
    })
}