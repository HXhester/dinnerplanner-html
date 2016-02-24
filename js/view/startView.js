// startView
var StartView = function(container){
    
    //container.style.backgroundImage = "url('images/Dinner-party.jpg')";
    //this.start = container.find("#start");
    //background-image: url("images/Dinner-Party.jpg");
    container.html('<h2 id="title2">A home dinner service</h2>');
    this.introduce = container.find("#title2");
    this.introduce.after('<div id="exampleView"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p></div>');
    this.introduce.after('<a id="StartPlanning" class="btn btn-default btn-lg"  role="button"> Create new dinner</a>');
    this.container = container;
    
};
