var StateController = function(model) {
    
    //views initiated from the beginning
    this.currentSideView = new SideMenu($("#sideMenu"),model);
    this.currentSideController = new SideMenuController(this.currentSideView,model);
    this.currentMainView = new StartView($("#start"),model);
    this.currentMainController = new StartViewController(this.currentMainView,model);
    
    this.changeMainView=function (view, viewController){
        this.currentMainView.container.empty();
        this.currentMainView = view;
        this.currentMainController = viewController; 
        console.log(this.currentMainView);
    }
    console.log(this.currentSideView.container);
    this.currentSideView.container.hide();
}