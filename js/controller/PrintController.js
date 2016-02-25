var PrintController = function (view, model){
    $('#back').click(function(){ 
        stateController.changeMainView(new IndexView($('#view-index'),model), new indexController($('#view-index'),model));
        stateController.currentSideView.container.show();
    })
}