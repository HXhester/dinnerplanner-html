//ExampleView Object constructor
//It's single Dish

var SingleDish = function (container, model, Id) {
	console.log(Id);
	
    this.container = container;
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)

    
//	this.plusButton = container.find("#plusGuest");
//	this.minusButton = container.find("#minusGuest");
//  this.fullMenu = container.find("#sideMenu");
   // console.log("Number of guests: "+model.numberOfGuests);
    //console.log("ID FOR THE DISH: "+Id);
    
    container.html('<div class="row"><div class="col-md-4" id="dishcontent"><h1>'+model.getDish(Id).Title+'</h1></div></div>');
    container.find("#dishcontent").append('<div><img src="'+model.getDish(Id).ImageURL+'"></div><p class="discription">'+model.getDish(Id).Description+'</p>');
    container.find("#dishcontent").append('<button id="backToSelect" class="btn">Back to select dish</button>');
    container.find("#dishcontent").after('<div class="col-md-4" id="ingTable"><h3>Ingredients for '+model.getNumberOfGuests()+' people</h3><div id="ingredientTable"></div><button id="addDish" class="btn">Add dish</button></div>');
    
    
    function createTable(tableData) {
        var table = $('<table class="container-fluid"></table>');
        table.append('<tr><th>Ingredient</th><th>Quantity</th><th>Unit</th><th>Price</th></tr>');
        var length = tableData.length;
        for(i=0; i < length; i++){
            var row = $('<tr></tr>');
<<<<<<< Updated upstream
            row.append('<td>'+tableData[i].name+'</td>');
            row.append('<td>'+tableData[i].quantity*model.getNumberOfGuests()+'</td>');
            row.append('<td>'+tableData[i].unit+'</td>');
            row.append('<td>'+tableData[i].price*model.getNumberOfGuests()+'</td>');
=======
            row.append('<td>'+tableData[i].Name+'</td>');
            row.append('<td>'+tableData[i].Quantity+'</td>');
            row.append('<td>'+tableData[i].Unit+'</td>');
            row.append('<td>'+tableData[i].price+'</td>');
>>>>>>> Stashed changes
            table.append(row);
        }

        $('#ingredientTable').append(table);
    }
<<<<<<< Updated upstream
    
=======
    createTable(model.getDish(Id).Ingredients);
>>>>>>> Stashed changes
    
    this.updateSD=function(obj,arg){
        
        container.find('#ingTable h3').html('Ingredients for '+model.getNumberOfGuests()+' people');
        container.find('#ingredientTable').empty();
        createTable(model.getDish(Id).ingredients);
        
    }
    model.addObserver(this.updateSD); 
    this.updateSD(container);

   // $("#addDish").click(model.addDishToMenu(1));
}
 
      
