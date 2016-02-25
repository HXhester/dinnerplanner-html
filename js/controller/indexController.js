var indexController = function(view, model) {
    
    $('#1').on("click",function(){
        console.log("change to single dish");
        stateController.changeMainView(new SingleDish($("#singleDish"),model,1),new singleDishController($("#singleDish"),model,1));
    });
    
    $('#dishtype').on("change", function(){
        console.log("changing dishtypes");
    });
}
                            