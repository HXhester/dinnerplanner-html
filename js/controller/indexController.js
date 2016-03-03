var indexController = function(view, model) {
    
   $('#dishtype').on("change", function(){

       model.getAllDishes(view.container.find("#dishtype").val(), view.container.find("#search").val());
       
    })
   
   $('#searchbutton').click(function(){
    
       model.getAllDishes(view.container.find("#dishtype").val(), view.container.find("#search").val());

   })
   
   
  $('.col-md-4').on("click", function() {   
       
       stateController.indexView.container.hide();
       
       //get ID for selected dish, call model for that dish
       var id = $(this).attr('id');
       model.getDish(id);
       stateController.changeMainView(new SingleDish($("#singleDish"),model),new singleDishController($("#singleDish"),model,id));
       //stateController.currentSideController = new SideMenuController(stateController.currentSideView,model);

   }); 
   
}
