
var FinalMenu = function (container, model) {
//=======
//var FinalMenuView = function (container, model) {
    this.container = container;
    container.html("<div class='row'><div id='printTop' class='container-fluid'></div></div>");
    this.printTop = container.find("#printTop");
    
    this.printTop.html("<div class='row'><h2 class='printheader'>My Dinner: "+model.getNumberOfGuests()+ "  people</h2></div><div class='col-md-6'><button class='back btn'>Go back and edit dinner</button></div></div>");
    container.append("<div id='menugrid'></div>");
    //this.menugrid = container.find("#menugrid");
    
    
    function printDishes(tableData) {
        var table = $('<div id="finaltable"></div>');
        var row = $('<div id="finalrow" class="row"></div>');
        var length = tableData.length;
        for(i=0; i < length; i++){
            
            row.append('<div class="col-md-4">'+'<img style="height:120px; width:120px" class="img-thumbnail" src="'+tableData[i].ImageURL+'"><br>'+tableData[i].Title+'</div>');

            table.append(row);
        }

        //this.menugrid.append(table);
        container.find("#menugrid").append(table);
    }
    
    container.find('#menugrid').after('<br><div class="row"><button class="btn" id="printFullRecipe">Print Full Recipe</button></div>');
    
    this.updateFM=function(obj){
       if(obj==="removeDish"||obj==="addDish"){
            container.find('#menugrid').empty();
            printDishes(model.getFullMenu());
            container.find(".printheader").html("My dinner: "+model.getNumberOfGuests()+" people");
       }
    }
    model.addObserver(this.updateFM); 
    this.updateFM(container);
}