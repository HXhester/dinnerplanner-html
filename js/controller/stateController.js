var StateController = function(model) {
    
    //views initiated from the beginning
    this.currentSideView = new SideMenu($("#sideMenu"),model);
    this.currentSideController = new SideMenuController(this.currentSideView,model);
    this.currentMainView = new StartView($("#start"),model);
    this.currentMainController = new StartViewController(this.currentMainView,model);
    this.indexView = new IndexView($("#view-index"), model);
    this.indexController = new indexController(this.indexView, model);
    
//    this.singleDishView = new SingleDish($("#singleDish"), model,id);
//    this.singleDishController = new singleDishController(this.SingleDishView, model,id);
//    
    this.finalMenu = new FinalMenu($("#finalMenu"), model);
    this.finalMenuController = new finalController(this.finalMenu, model);
    
    this.printView = new PrintView($("#print"),model);
    this.printViewController = new PrintController(this.printView, model);
    
    this.changeMainView=function (view, viewController){
        console.log("changing view");
        //this.currentMainView.container.empty();
        this.currentMainView = view;
        this.currentMainView.container.show();
        this.currentMainController = viewController; 

    }

    this.currentSideView.container.hide();
    this.indexView.container.hide();
    //this.singleDishView.container.hide();
    this.finalMenu.container.hide();
    this.printView.container.hide();
}