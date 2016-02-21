var model,StateController;
$(function() {
    //lab3
	//We instantiate our model
    model = new DinnerModel();
    
    //add controller
    stateController = new StateController(model);
    
    

});