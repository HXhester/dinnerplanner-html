var IndexView = function (container, model) {
    
    this.container = container;
    container.html('<div id="navigation"></div><div id="content-grid"></div>');
    this.navigation = container.find("#navigation");
    
    
    this.navigation.prepend('<button><span class="glyphicon glyphicon-search"><i class="fa fa-search"></i></span></button><br><input type="search" id="search" placeholder="Search..." />');
    
    //TODO SOFIE SEARCH BUTTON
    
    this.navigation.append('<select class="form-control" id="dishtype"><option>starter</option><option>main dish</option><option>dessert</option></select>')
    this.dishtype = container.find("#dishtype");
    
    //TODO SOFIE UPDATE SELECTION BASED ON DISHTYPE
    
    this.dishtype.after('<div id="table"></div>');
    function createSelection(tableData) {
        var table = container.find('#table');
        var row = $('<div id="row"></div>');
        var length = tableData.length;
        
        for(i=0; i < length; i++){
  // <a> is no need, change view in the controller
            row.append('<div class="col-md-4" id="'+tableData[i].id+'">'+'<img style="height:120px; width:120px" class="img-thumbnail" src="images/'+tableData[i].image+'">'+tableData[i].name+'</div>');


            table.append(row);
        }


        container.append(table);
    }
    
//model.getAllDishes(container.find('#search').val();
    
    
  
//calling function createSelection//
    //this.createSelection(model.getAllDishes(container.find("#dishtype").val(),null));
    //console.log(model.getAllDishes(container.find("#dishtype").val(),null));

    
    this.update1 = function(obj,arg){
        // change dishes based on combobox #dishtype, change view with model
        console.log("updating dishes");
        console.log(container.find("#dishtype").val());
        container.find("#table").empty();
        createSelection(model.getAllDishes(container.find("#dishtype").val(),null));
        
    }
    
    model.addObserver(this.update1); 
    this.update1(container);

    
    
}