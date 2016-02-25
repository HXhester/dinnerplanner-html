var indexController = function(view, model) {
    
    $('#1').on("click",function(){
        console.log("change to single dish");
        stateController.changeMainView(new SingleDish($("#singleDish"),model,1),new singleDishController($("#singleDish"),model,1));
    });
    
   $('#dishtype').on("change", function(){
       view.contentgrid.html("");
       console.log("changing dishtypes");
      //model.setType(view.getSelectedType());
//       console.log("#dishtype".val());
        view.createSelection(model.getAllDishes(view.dishtype.val(),null));
        //model.getAllDishes(container.find("#dishtype").val(),null);
        //stateController.changeMainView(new IndexView($("#view-index")),model);
        
        //stateController.currentSideView.container.show();
    })
   
   $('#searchbutton').click(function(){
    view.contentgrid.html("");
    view.createSearchResults(model.getAllDishes(view.dishtype.val(),view.searchquery.val()));   
   })
   
   $('.col-md-4').click(function() {
     
       stateController.indexView.container.hide();
       stateController.SingleDishView.container.show();
       
       //get ID for selected dish, call model for that dish
       //var id = $(this).attr('id');
       //SingleDish(container, model, id);
   })
   
}
