$(function() {
    //lab3
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	//var SingleDishView = new SingleDishView($("#view"), model);
    //var PrintView = new PrintView($("#view"), model);
    var SideMenuView = new SideMenu($("#sideMenu"),model);
    var indexview = new indexView($("#view-index"), model);
    //var example = new indexView($("#view"), model);
    //var finalMenuView = new finalMenu($("#finalMenu"), model);
    //add controller
    //var showDish = new SingleDishView($("#view"), model);
    
    

});