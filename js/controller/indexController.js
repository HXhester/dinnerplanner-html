var indexController = function(view, model) {
    
   $('#dishtype').on("change", function(){


       model.getAllDishes($("#dishtype").val(), $("#search").val());
       //stateController.indexController = new indexController($("#view-index"), model);
       stateController.indexView.update1();
       
    })
   
   $('#searchbutton').click(function(){
    
       model.getAllDishes($("#dishtype").val(), $("#search").val());
       stateController.indexController = new indexController($("#view-index"), model);
       console.log(model.dishes);
   })
   
   
  $("#content-grid").on("click", ".dishlist", function() {   

       stateController.indexView.container.hide();
       
       //get ID for selected dish, call model for that dish
       var id = $(this).attr('id');
       model.getDish(id);

       console.log("click and get dish: "+ id);
       stateController.singleDishView.container.show();
      
       //stateController.changeMainView(new SingleDish($("#singleDish"),model),new singleDishController($("#singleDish"),model,id));

       //stateController.currentSideController = new SideMenuController(stateController.currentSideView,model);

   }); 
   
}
