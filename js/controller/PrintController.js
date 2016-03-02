var PrintController = function (view, model){
    $('.back').click(function(){ 
        stateController.indexView.container.show();
        stateController.currentSideView.container.show();
        stateController.printView.container.hide();
    })
}