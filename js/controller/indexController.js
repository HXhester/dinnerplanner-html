var indexController = function(view, model) {
    
    
   $('#dishtype').on("change", function(){
       //view.container.find("#content-grid").html("");
       //console.log("changing dishtypes");
//       console.log("#dishtype".val());

       //view.createSelection(model.getAllDishes(view.dishtype.val(),null));
        stateController.indexView.update1();

        //model.getAllDishes(container.find("#dishtype").val(),null);

        
        stateController.currentMainController = new indexController($("#view-index"),model);

        //view.createSelection(model.getAllDishes(view.dishtype.val(),null));
        //model.getAllDishes(container.find("#dishtype").val(),null);
        //stateController.changeMainView(new IndexView($("#view-index")),model);
       // stateController.indexView.update1();
        //stateController.currentSideView.container.show();

    })
   
   $('#searchbutton').click(function(){
    //view.container.find("#content-grid").html("");
    //for initialize
       model.getAllDishes(view.container.find("#dishtype").val(), view.container.find("#search").val());
       //stateController.indexView.update1();
       //stateController.currentMainController = new indexController(stateController.indexView,model);

   })
   

   $('.col-md-4').on("click", function() {
       stateController.indexView.container.hide();
//       stateController.SingleDishView.container.show();
       
       //get ID for selected dish, call model for that dish
       var id = $(this).attr('id');
       console.log(id);
       stateController.changeMainView(new SingleDish($("#singleDish"),model,id),new singleDishController($("#singleDish"),model,id));
       stateController.currentSideController = new SideMenuController(stateController.currentSideView,model);
//       stateController.singleDishView.container.show();
//       stateController.singleDishView.updateSD();
//    
       //SingleDish(container, model, id);
   });
   
}
