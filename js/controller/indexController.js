var indexController = function(view, model) {
 
   $('#dishtype').change(function(){
       console.log("changing dishtypes");
        model.createSelection(model.getAllDishes(container.find("#dishtype").val(),null));
        stateController.changeMainView(IndexView,model);
        
        //stateController.currentSideView.container.show();
    })
}