var SideMenuController = function(view, model) {
 
    $('#numberOfGuests').change(function(){
        model.setNumberOfGuests(view.getNumberOfGuests());
        stateController.currentMainView.updateSD();
        stateController.currentMainController = new indexController(stateController.indexView,model);
    })
    
    $('#confirm').click(function(){
        console.log("final menu!!!");
        //stateController.changeMainView(new PrintView($('#print'),model),new PrintController($('#print'),model));
        //stateController.changeMainView(new finalMenu($('#finalMenu'),model),new finalMenuController($('#print'),model));
        
        
        stateController.currentMainView.container.hide();
        stateController.currentSideView.container.hide();
        stateController.indexView.container.hide();
        stateController.finalMenu.updateFM();
        stateController.finalMenu.container.show();
        //stateController.currentSideController = new singleDishController($("#sideMenu"),model);
    })
    
//    $(".hoverDelete").hover(function(){
//        console.log("hover");
//    $(this).css("background-color", "yellow");
//    }, function(){
//    $(this).css("background-color", "pink");
//});
    
    $('.delete').on("click",function(){
        console.log($(this).attr('id'));
        model.removeDishFromMenu($(this).attr("id"));
        view.update();
    })
    
}