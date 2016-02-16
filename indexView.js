var indexView = function (container, model) {
    
    this.MenuTitle = container.find("#form-group");
    
    this.MenuTitle.html("<h4>YOUR MENU</h4><br><label for='People'>People</label><br><select type='people' class='form-control' id='numberOfGuests'></select><br>");
    

    
    function createSelection(tableData) {
        var table = $('<div id="table"></div>');
        var row = $('<div id="row"></div>');
        var length = tableData.length;
        for(i=0; i < length; i++){
            
            row.append('<div class="col-md-4">'+tableData[i].name+'<img src="images/'+tableData[i].image+'"></div>');

            table.append(row);
        }

        $('#content-grid').append(table);
    }
    
    
    
//calling function createSelection//
    createSelection(model.getAllDishes(container.find("#dishtype").val(),null).prevObject);

    
}