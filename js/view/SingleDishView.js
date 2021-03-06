//ExampleView Object constructor
//It's single Dish

var SingleDish = function (container, model) {
	
    this.container = container;
    this.container.append("<img id='loadingSingledish' src='images/avokado.gif'/>");
    container.html('<div class="row"><div class="col-md-6" id="dishcontent"></div></div>');

    container.find("#dishcontent").after('<div class="col-md-4" id="ingTable"><h3>Ingredients for '+model.getNumberOfGuests()+' people</h3><div id="ingredientTable"></div><button id="addDish" class="btn">Add dish</button></div>');
    container.find("#dishcontent").append('<div id="DISH"></div><button id="backToSelect" class="btn">Back to select dish</button>');
    
    function createTable(tableData) {
        var table = $('<table class="container-fluid"></table>');
        table.append('<tr><th>Ingredient</th><th>Quantity</th><th>Unit</th><th>Price</th></tr>');
        var length = tableData.length;
        for(i=0; i < length; i++){
            var row = $('<tr></tr>');
            row.append('<td>'+tableData[i].Name+'</td>');
            row.append('<td>'+Math.ceil(tableData[i].Quantity*model.getNumberOfGuests())+'</td>');
            row.append('<td>'+tableData[i].Unit+'</td>');
            row.append('<td>'+Math.ceil(tableData[i].Quantity*model.getNumberOfGuests())+'</td>');

            table.append(row);
        }

        $('#ingredientTable').append(table);
    }
    
    
    this.updateSD=function(obj){
        if(obj==="changeNumOfGuests"){
            container.find('#ingTable h3').html('Ingredients for '+model.getNumberOfGuests()+' people');
            container.find('#ingredientTable').empty();
            //createTable(model.getDish(Id).ingredients);
            createTable(model.singleDish.Ingredients);
        }
        if(obj==="getDish"){
            
            container.find("#DISH").empty();
            container.find("#DISH").html('<h1>'+model.singleDish.Title+'</h1><div><img style="width:200% height:200%" class="img-responsive" src="'+model.singleDish.ImageURL+'"></div><p class="discription">'+model.singleDish.Description+'</p>');
            container.find('#ingredientTable').empty();
            createTable(model.singleDish.Ingredients);
        }
    }
    model.addObserver(this.updateSD); 
    this.updateSD(container);

   // $("#addDish").click(model.addDishToMenu(1));
}
 
      
