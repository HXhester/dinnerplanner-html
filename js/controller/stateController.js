var StateController = function(model) {
    
    //views initiated from the beginning
    this.currentSideView = new SideMenu($("#sideMenu"),model);
    this.currentSideController = new SideMenuController(this.currentSideView,model);
    this.currentMainView = new StartView($("#start"),model);
    this.currentMainController = new StartViewController(this.currentMainView,model);
    this.indexView = new IndexView($("#view-index"), model);
    this.indexController = new indexController(this.indexView, model);
    this.SingleDishView = new SingleDish($("#singleDish"), model);
    //this.singleDishController = new singleDishController(this.SingleDishView, model);
    this.finalMenu = new finalMenu($("#finalMenu"), model);
    this.finalMenuController = new finalController(this.finalMenu, model);
    
    this.changeMainView=function (view, viewController){
        console.log("changing view");
        this.currentMainView.container.empty();
        this.currentMainView = view;
        this.currentMainController = viewController; 
        console.log(this.currentMainView);
    }   
   // console.log(this.currentSideView.container);
    this.currentSideView.container.hide();
    this.indexView.container.hide();
    this.SingleDishView.container.hide();
    
}