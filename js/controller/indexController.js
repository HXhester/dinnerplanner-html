var indexController = function(view, model) {
 
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
       //console.log("klick!");
     //get ID for selected dish
       //stateController.indexView.container.hide();
       //stateController.singleDish.container.show();
       
   })
   
}