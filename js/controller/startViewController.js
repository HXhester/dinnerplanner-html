var StartViewController = function(view, model) {
    
    $('#StartPlanning').click(function(){
        
        stateController.indexView.container.show();
        stateController.currentMainView.container.hide();
        stateController.currentSideView.container.show();
        
    })
}