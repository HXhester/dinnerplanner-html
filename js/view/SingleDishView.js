//ExampleView Object constructor
//It's single Dish
var SingleDishView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
    
//	this.plusButton = container.find("#plusGuest");
//	this.minusButton = container.find("#minusGuest");
//  this.fullMenu = container.find("#sideMenu");

	this.numberOfGuests.html('<option>1</option><option>2</option><option>3</option>');
    
    function createTable(tableData) {
        var table = $('<table class="table table-striped"></table>');
        var length = tableData.length;
        for(i=0; i < length; i++){
            var row = $('<tr></tr>');
            row.append('<td>'+tableData[i].name+'</td>');
            row.append('<td>'+tableData[i].quantity+'</td>');
            row.append('<td>'+tableData[i].unit+'</td>');
            row.append('<td>'+tableData[i].price+'</td>');
            table.append(row);
        }

        $('#ingTable h3').after(table);
    }
        
    createTable(model.getDish(1).ingredients);
    $("#addDish").click(model.addDishToMenu(1));

}
 
