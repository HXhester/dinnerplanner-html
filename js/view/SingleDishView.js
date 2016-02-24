//ExampleView Object constructor
//It's single Dish
var SingleDish = function (container, model, Id) {
	Id = 1;
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.container = container;
    this.numberOfGuests = container.find("#numberOfGuests");
    
//	this.plusButton = container.find("#plusGuest");
//	this.minusButton = container.find("#minusGuest");
//  this.fullMenu = container.find("#sideMenu");

	this.numberOfGuests.html('<option>1</option><option>2</option><option>3</option>');
    container.html('<h1>Meatballs</h1>');
    container.append('<div>'+model.getDish(Id).image+'</div><p class="discription">'+model.getDish(Id).description+'</p>');
    container.append('<button id="backToSelect" class="btn">Back to select dish</button>');
    container.append('<div id="ingTable"><h3>Ingredients for '+model.getNumberOfGuests()+' people</h3><button id="addDish" class="btn">Add dish</button></div>');
    
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
        
    createTable(model.getDish(Id).ingredients);

}
 
      
