var finalController = function (view, model) {
    
    $("#back").click(function() {
        //to clear the menu every time you leave it
        view.container.find("#menugrid").html("");
        //show index again
        stateController.finalMenu.container.hide();
        stateController.indexView.container.show();
        stateController.currentSideView.container.show();
        stateController.currentSideController = new SideMenuController(stateController.currentSideView,model);
    })
    
    $("#printFullRecipe").click(function(){
        stateController.finalMenu.container.hide();
        stateController.printView.container.show();
        stateController.printView.updatePM();
    })
    
}