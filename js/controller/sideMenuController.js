var SideMenuController = function(view, model) {
 
    $('#numberOfGuests').change(function(){
        model.setNumberOfGuests(view.getNumberOfGuests());
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
//    
//    $('.hoverDelete').hover(function(){
//        console.log("hover");
//        $('.delete').css({"opacity":"1","width":"20%"});
//    },function(){
//        $('.delete').css("opacity","0");
//    })
    
    $(".hoverDelete").hover(function(){
        console.log("hover");
    $(this).css("background-color", "yellow");
    }, function(){
    $(this).css("background-color", "pink");
});
    
    $('.delete').click(function(){
        model.removeDishFromMenu($(this).attr("id"));
    })
    
}