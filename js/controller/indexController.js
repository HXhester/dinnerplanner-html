var indexController = function(view, model) {
    
    
   $('#dishtype').on("change", function(){
       view.contentgrid.html("");
       console.log("changing dishtypes");
//       console.log("#dishtype".val());
       //view.createSelection(model.getAllDishes(view.dishtype.val(),null));
       view.update1();
        //model.getAllDishes(container.find("#dishtype").val(),null);
        //stateController.changeMainView(new IndexView($("#view-index"),model);
        
        stateController.currentMainController = new indexController($("#view-index"),model);
    })
   
   $('#searchbutton').click(function(){
    view.contentgrid.html("");
    view.createSearchResults(model.getAllDishes(view.dishtype.val(),view.searchquery.val()));   
   })
   
   $('.col-md-4').on("click",function() {
   //$(document).on("click",'.col-md-4',function(){
       stateController.indexView.container.hide();
//       stateController.SingleDishView.container.show();
       
       //get ID for selected dish, call model for that dish
       var id = $(this).attr('id');
       console.log("change to single dish");
       stateController.changeMainView(new SingleDish($("#singleDish"),model,id),new singleDishController($("#singleDish"),model,id));
//       stateController.singleDishView.container.show();
//       stateController.singleDishView.updateSD();
//    
       //SingleDish(container, model, id);
   });
   
}
