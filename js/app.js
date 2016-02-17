$(function() {
    //lab3
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	//var exampleView = new SingleDishView($("#view"), model);
    //var exampleView = new PrintView($("#view"), model);
    var exampleView = new SideMenu($("#view"),model);
    //var exampleView = new indexView($("#view"), model);
    var example = new indexView($("#view"), model);
    //add controller
    //var showDish = new SingleDishView($("#view"), model);
    
    

});