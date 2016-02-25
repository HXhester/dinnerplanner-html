var finalController = function (view, model) {
    
    $("#back").click(function() {
        //to clear the menu every time you leave it
        view.menugrid.html("");
        //show index again
        stateController.finalMenu.container.hide();
        stateController.indexView.container.show();
        
    })
    
}