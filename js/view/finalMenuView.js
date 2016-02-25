
var FinalMenu = function (container, model) {
//=======
//var FinalMenuView = function (container, model) {
    this.container = container;
    this.printTop = container.find("#printTop");
    
    this.printTop.html("<h2 class='left''>My Dinner: 4 people</h2><br><button id='back' class='btn'>Go back and edit dinner</button>");
    container.append("<div id='menugrid'></div>");
    //this.menugrid = container.find("#menugrid");
    
    
        function printDishes(tableData) {
        var table = $('<div id="table"></div>');
        var row = $('<div id="row"></div>');
        var length = tableData.length;
        for(i=0; i < length; i++){
            
            row.append('<div class="col-md-4"><a href="singleDish.html">'+'<img style="height:120px; width:120px" class="img-thumbnail" src="images/'+tableData[i].image+'">'+tableData[i].name+'</a></div>');

            table.append(row);
        }

        //this.menugrid.append(table);
        container.find("#menugrid").append(table);
    }
    
    printDishes(model.selectedDishes);
    
}