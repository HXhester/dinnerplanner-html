//ExampleView Object constructor
//It's single Dish
var SingleDishView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
//	this.numberOfGuests = container.find("#numberOfGuests");
//	this.plusButton = container.find("#plusGuest");
//	this.minusButton = container.find("#minusGuest");
//  this.fullMenu = container.find("#sideMenu");

	this.numberOfGuests.html('<option>1</option><option>2</option><option>3</option>');
    
    function createTable(tableData) {
        var table = $('<table></table>');
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
    
    function createMenu(menu) {
        var table = $('<table></table>');
        var length = menu.length;
        for(i=0; i < length; i++){
            var row = $('<tr></tr>');
            var cost = 0;
            for(j=0;j<menu[i].ingredients.length;j++){
                cost += menu[i].ingredients[j].price;
            }
            row.append('<td>'+menu[i].name+'</td>');
            row.append('<td>'+cost+'</td>');
            table.append(row);
        }

        $('#sideMenu').append(table);
        
    }
    
    createTable(model.getDish(1).ingredients);
    
    
    createMenu(model.getFullMenu());

}
 
