var SideMenuController = function(view, model) {
 
    $('#numberOfGuests').change(function(){
        model.setNumberOfGuests(view.getNumberOfGuests());
    })
    
}