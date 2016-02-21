//ExampleView Object constructor
//It's single Dish
var SingleDish = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
    
//	this.plusButton = container.find("#plusGuest");
//	this.minusButton = container.find("#minusGuest");
//  this.fullMenu = container.find("#sideMenu");

	this.numberOfGuests.html('<option>1</option><option>2</option><option>3</option>');
    container.html('<h1>Meatballs</h1>');
    container.append('<img src="images/meatballs.jpg" class="img-responsive" alt="Responsive image" width="100%/9"><br><p class="discription">Here is how you make it... Lore ipsum...</p>');
    container.append('<a href="index.html"><button id="back" class="btn">Back to select dish</button></a>');
    container.append('<div id="ingTable"><h3>Ingredients for 4 people</h3><button id="addDish" class="btn">Add dish</button></div>');
    
    
    
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
 
      
