
var FinalMenu = function (container, model) {
//=======
//var FinalMenuView = function (container, model) {
    this.container = container;
    this.printTop = container.find("#printTop");
    
    this.printTop.html("<h2 class='left'>My Dinner: 4 people</h2><button id='back' class='btn'>Go back and edit dinner</button>");
    container.append("<div id='menugrid'></div>");
    //this.menugrid = container.find("#menugrid");
    
    
    function printDishes(tableData) {
        var table = $('<div id="finaltable"></div>');
        var row = $('<div id="finalrow"></div>');
        var length = tableData.length;
        for(i=0; i < length; i++){
            
            row.append('<div class="col-md-4">'+'<img style="height:120px; width:120px" class="img-thumbnail" src="images/'+tableData[i].image+'">'+tableData[i].name+'</div>');

            table.append(row);
        }

        //this.menugrid.append(table);
        container.find("#menugrid").append(table);
    }
    
    container.find('#menugrid').after('<br><button class="btn" id="printFullRecipe">Print Full Recipe</button>');
    
    this.updateFM=function(obj,arg){
       
        container.find('#menugrid').empty();
        printDishes(model.getFullMenu());
        
    }
    model.addObserver(this.updateFM); 
    this.updateFM(container);
}