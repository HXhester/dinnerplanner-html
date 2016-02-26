var IndexView = function (container, model) {
    
    this.container = container;
    container.html('<div id="navigation"></div><div id="content-grid"></div>');
    this.navigation = container.find("#navigation");
    //this.contentgrid = container.find("#content-grid");

    
    
    this.navigation.prepend('<button id = "searchbutton"><span class="glyphicon glyphicon-search"><i class="fa fa-search"></i></span></button><br><input type="search" id="search" placeholder="Search..." />');
    
    this.searchquery = container.find("#search");

    this.navigation.append('<select class="form-control" id="dishtype"><option>starter</option><option>main dish</option><option>dessert</option></select>')
    this.dishtype = container.find("#dishtype");
    //TODO SOFIE UPDATE SELECTION BASED ON DISHTYPE
    
    
//    function createSearchResults(tableData) {
//        var table = $('<div id="searchtable"></div>');
//        var row = $('<div id="searchrow"></div>');
//        var length = tableData.length;
//        for(i=0; i < length; i++){
//            
//            row.append('<div class="col-md-4" id="'+tableData[i].id+'">'+'<img style="height:120px; width:120px" class="img-thumbnail" src="images/'+tableData[i].image+'">'+tableData[i].name+'</div>');
//
//            table.append(row);
//        }
//
//
//        container.find("#content-grid").append(table);
//    }
    
    
    //this.contentgrid.prepend("<div id='table'></div>");
    //this.table = container.find("#table");
    
    function createSelection(tableData) {
        var table = $('<div id="table"></div>');
        var row = $('<div id="row"></div>');
        var length = tableData.length;
        
        for(i=0; i < length; i++){
            
            
            row.append('<div class="col-md-4" id="'+tableData[i].id+'">'+'<img style="height:120px; width:120px" class="img-thumbnail" src="images/'+tableData[i].image+'">'+tableData[i].name+'</div>');


            table.append(row);
        }


        container.find("#content-grid").append(table);
    }
    
    
    this.update1 = function(obj,arg){
        // change dishes based on combobox #dishtype, change view with model
        container.find("#content-grid").empty();
        createSelection(model.getAllDishes(container.find("#dishtype").val(), container.find("#search")));
        //row above creates problems, don't know why!!
        //createSearchResults(model.getAllDishes(container.find("#dishtype").val(),container.find("#search")));

        console.log("updating dishes");
        //console.log(container.find("#dishtype").val());

        
    }
    
    model.addObserver(this.update1); 
    this.update1(container);

    
    
}