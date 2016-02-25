var StartViewController = function(view, model) {
    
    $('#StartPlanning').click(function(){
        stateController.changeMainView(new IndexView($("#view-index"),model),new indexController($("#view-index"),model));
        stateController.currentSideView.container.show();
    })
}