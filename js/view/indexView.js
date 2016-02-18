var indexView = function (container, model) {
    

    this.navigation = container.find("#navigation");
    this.dishtype = container.find("#dishtype");
    console.log(this.dishtype.val());
    
//    console.log("hej");
//    //Adding dishtype options to combobox
//    var option1 = this.createElement(option);
//    option1.text = "starter";
//    var option2 = this.createElement(option);
//    option2.text = "main dish";
//    var option3 = this.createElement(option);
//    option3.text = "dessert";
//    $('#dishtype').add(option1); 
//    

   
    
//    this.navigation.html('<button><span class="glyphicon glyphicon-search"><i class="fa fa-search"></i></span></button><br><input type="search" id="search" placeholder="Search..." />');
    
    function createSelection(tableData) {
        var table = $('<div id="table"></div>');
        var row = $('<div id="row"></div>');
        var length = tableData.length;
        for(i=0; i < length; i++){
            
            row.append('<div class="col-md-4"><a href="singleDish.html">'+'<img style="height:120px; width:120px" class="img-thumbnail" src="images/'+tableData[i].image+'">'+tableData[i].name+'</a></div>');

            table.append(row);
        }

        $('#content-grid').append(table);
    }
    
//model.getAllDishes(container.find('#search').val();
    
    
  
//calling function createSelection//
    createSelection(model.getAllDishes(container.find("#dishtype").val(),null));

    
}