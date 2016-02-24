var singleDishController = function(view, model,Id){
    
    $("#addDish").click(model.addDishToMenu(Id));
    $("backToSelect").click(function(){
        stateController.changeMainView(new IndexView($("#view-index"),model));
    })
}