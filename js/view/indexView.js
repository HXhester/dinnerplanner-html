var IndexView = function (container, model) {
    
    this.container = container;
    container.html('<div id="navigation" class="row"></div><div id="content-grid"></div>');
    this.navigation = container.find("#navigation");
    //this.contentgrid = container.find("#content-grid");
    this.navigation.after("<img style='width:80px; height:80px' id='loading' src='images/avokado.gif'/>");

    
    
    this.navigation.prepend('<div class="form-group input-group"><input type="search" id="search" placeholder="Search..." /><button id = "searchbutton"><span class="glyphicon glyphicon-search"><i class="fa fa-search"></i></span></button></div>');
    
    this.searchquery = container.find("#search");

    this.navigation.append('<div class="col-md-6"><select class="form-control" id="dishtype"><option>appetizer</option><option>main dish</option><option>dessert</option></select></div>')
    this.dishtype = container.find("#dishtype");
    
    
    function createSelection(tableData) {
        
        var table = $('<div id="table"></div>');
        var row = $('<div id="row" class="container-fluid"></div>');
        var length = tableData.length;
        
        for(i=0; i < length; i++){
            //  console.log(tableData[i].Title);
            
            row.append('<div class="col-md-4 dishlist" id="'+tableData[i].RecipeID+'">'+'<img style="height:120px; width:120px" class="img-thumbnail" src="'+tableData[i].ImageURL+'">'+tableData[i].Title+'</div>');
            
            table.append(row);
        }


        container.find("#content-grid").append(table);
    }
    
    //the obj comes from model
    this.update1 = function(obj){
        //$("#loading").hide();
        // change dishes based on combobox #dishtype, change view with model
        if(obj === "dishesAvailable") {
            //this.container.find("#content-grid").html("WOW");  
            container.find("#content-grid").empty();
            createSelection(model.dishes);
            
        }
    }
    
    model.addObserver(this.update1);
    model.getAllDishes("appetizer","");
    //model.getAllDishes("", "");
    //this.update1();

    
    
}