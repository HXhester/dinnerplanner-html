var indexController = function(view, model) {
 
   $('#dishtype').on("change", function(){
       console.log("changing dishtypes");
      //model.setType(view.getSelectedType());
//       console.log("#dishtype".val());
        view.createSelection(model.getAllDishes(view.dishtype,null));
        //model.getAllDishes(container.find("#dishtype").val(),null);
        //stateController.changeMainView(new IndexView($("#view-index")),model);
        
        //stateController.currentSideView.container.show();
    })
}