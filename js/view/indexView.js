var IndexView = function (container, model) {
    

    container.html('<div id="navigation"></div><div id="content-grid"></div>');
    this.navigation = container.find("#navigation");
    
    
    
    this.navigation.prepend('<button><span class="glyphicon glyphicon-search"><i class="fa fa-search"></i></span></button><br><input type="search" id="search" placeholder="Search..." />');
    
    //TODO SOFIE SEARCH BUTTON
    
    this.navigation.append('<select class="form-control" id="dishtype"><option>starter</option><option>main dish</option><option>dessert</option></select>')
    this.dishtype = container.find("#dishtype");
    
    //TODO SOFIE UPDATE SELECTION BASED ON DISHTYPE
    
    
    
    function createSelection(tableData) {
        var table = $('<div id="table"></div>');
        var row = $('<div id="row"></div>');
        var length = tableData.length;
        for(i=0; i < length; i++){
            
            row.append('<div class="col-md-4">'+'<img style="height:120px; width:120px" class="img-thumbnail" src="images/'+tableData[i].image+'">'+tableData[i].name+'</div>');

            table.append(row);
        }

        //console.log(container);
        container.append(table);
    }
    
//model.getAllDishes(container.find('#search').val();
    
    
  
//calling function createSelection//
    createSelection(model.getAllDishes(container.find("#dishtype").val(),null));
    //console.log(model.getAllDishes(container.find("#dishtype").val(),null));

    this.getSelectedType = function(){
        console.log(this.dishtype.find('option:selected').val());
        return this.dishtype.find('option:selected').val();
    }
    
         this.update = function(obj,arg){
        // change dishes based on combobox #dishtype, change view with model
         createSelection(model.getAllDishes(container.find("#dishtype").val(),null));
        console.log("updating dishes");
    }
    
    model.addObserver(this.update); 
    this.update(container);
    
    
}