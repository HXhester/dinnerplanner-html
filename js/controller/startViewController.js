var StartViewController = function(view, model) {
    
    $('#StartPlanning').click(function(){
        //stateController.changeMainView(new IndexView($("#view-index"),model));
        stateController.indexView.container.show();
        stateController.currentMainView.container.hide();
        stateController.currentSideView.container.show();
    })
}