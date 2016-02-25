var StartViewController = function(view, model) {
    
    $('#StartPlanning').click(function(){
//<<<<<<< HEAD
//        stateController.changeMainView(new IndexView($("#view-index"),model),new indexController($("#view-index"),model));
//=======
        //stateController.changeMainView(new IndexView($("#view-index"),model));
        stateController.indexView.container.show();
        stateController.currentMainView.container.hide();
        stateController.currentSideView.container.show();
    })
}