var IndexView = function (container, model) {
    

    container.html('<div id="navigation"></div><div id="content-grid"></div>');
    this.navigation = container.find("#navigation");
    
    
//    console.log("hej");
//    //Adding dishtype options to combobox

//    var option1 = document.createElement("OPTION");
//    option1.text = "starter";
//    var option2 = this.createElement(option);
//    option2.text = "main dish";
//    var option3 = this.createElement(option);
//    option3.text = "dessert";
//    $('#dishtype').add(option1); 
//    console.log(this.dishtype.val());
    
    

    
    
    this.navigation.prepend('<button><span class="glyphicon glyphicon-search"><i class="fa fa-search"></i></span></button><br><input type="search" id="search" placeholder="Search..." />');
    
    this.navigation.append('<select type="dishtype" class="form-control" id="dishtype"></select>')
    
    this.dishtype = container.find("#dishtype");
    
    this.dishtype.html('<option>starter</option><option>main dish</option><option>dessert</option>');
    
    function createSelection(tableData) {
        var table = $('<div id="table"></div>');
        var row = $('<div id="row"></div>');
        var length = tableData.length;
        for(i=0; i < length; i++){
            
            row.append('<div class="col-md-4"><a href="singleDish.html">'+'<img style="height:120px; width:120px" class="img-thumbnail" src="images/'+tableData[i].image+'">'+tableData[i].name+'</a></div>');

            table.append(row);
        }
//        var table = $('<table id="table"></table>');
//        var row = $('<tr id="row"></tr>');
//        var length = tableData.length;
//        for(i=0; i < length; i++){
//            
//            row.append('<td class="col-md-4"><a href="singleDish.html">'+'<img style="height:120px; width:120px" class="img-thumbnail" src="images/'+tableData[i].image+'">'+tableData[i].name+'</a></td>');
//
//            table.append(row);
//        }
        console.log(container);
        container.append(table);
    }
    
//model.getAllDishes(container.find('#search').val();
    
    
  
//calling function createSelection//
    createSelection(model.getAllDishes(container.find("#dishtype").val(),null));
    //console.log(model.getAllDishes(container.find("#dishtype").val(),null));

    
}