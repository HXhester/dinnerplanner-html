var singleDishController = function(view, model,Id){
    
    $("#addDish").click(function(){
        model.addDishToMenu(Id)
    });
    console.log(model.getFullMenu());
    $("#backToSelect").click(function(){
        console.log("back to select");
        stateController.indexView.container.show();
        view.empty();
        stateController.indexView.update1();
    })
}