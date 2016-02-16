$(function() {
    //lab3
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	//var exampleView = new SingleDishView($("#view"), model);
    //var exampleView = new PrintView($("#view"), model);
    var exampleView = new indexView($("#view"), model);

});