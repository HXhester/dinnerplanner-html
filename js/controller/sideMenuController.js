var SideMenuController = function(view, model) {
 
    $('#numberOfGuests').change(function(){
        model.setNumberOfGuests(view.getNumberOfGuests());
    });
    
    $('#confirm').click(function(){
        //stateController.changeMainView(new PrintView($('#print'),model),new PrintController($('#print'),model));
        //stateController.changeMainView(new finalMenu($('#finalMenu'),model),new finalMenuController($('#print'),model));
        stateController.currentSideView.container.hide();
    });
    
    $('.hoverDelete').hover(function(){
        $('.delete').css({"opacity":"1","width":"20%"});
    },function(){
        $('.delete').css("opacity","0");
    })
    
    $('.delete').click(function(){
        model.removeDishFromMenu($(this).attr("id"));
    })
    
}