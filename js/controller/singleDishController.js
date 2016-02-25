var singleDishController = function(view, model,Id){
    
    $("#addDish").click(function(){model.addDishToMenu(Id)});
    console.log(model.getFullMenu());
    $("#backToSelect").click(function(){
        console.log("back to select");
        stateController.changeMainView(new IndexView($("#view-index"),model), new indexController($("#view-index"),model));
    })
}