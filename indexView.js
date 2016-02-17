var indexView = function (container, model) {
    
    this.MenuTitle = container.find("#form-group");
    
//    this.MenuTitle.html("<h4>YOUR MENU</h4><br><label for='People'>People</label><br><select type='people' class='form-control' id='numberOfGuests'></select><br>");

    
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
    
    
  //  console.log(model.getAllDishes(container.find("#dishtype").val(),null));
//calling function createSelection//
    createSelection(model.getAllDishes(container.find("#dishtype").val(),null));

    
}