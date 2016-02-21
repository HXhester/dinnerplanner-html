<<<<<<< Updated upstream
var finalMenu = function (container, model) {
=======
var FinalMenuView = function (container, model) {
>>>>>>> Stashed changes
    
    this.finalMenu = container.find("#finalMenu");
    this.printTop = container.find("#printTop");
    
    this.printTop.html("<h2 class='left''>My Dinner: 4 people</h2><br><a href='index.html' class='right'><button id='back' class='btn'>Go back and edit dinner</button></a>");
    
        function printDishes(tableData) {
        var table = $('<div id="table"></div>');
        var row = $('<div id="row"></div>');
        var length = tableData.length;
        for(i=0; i < length; i++){
            
            row.append('<div class="col-md-4"><a href="singleDish.html">'+'<img style="height:120px; width:120px" class="img-thumbnail" src="images/'+tableData[i].image+'">'+tableData[i].name+'</a></div>');

            table.append(row);
        }

        $('#finalMenu').append(table);
    }
    
    printDishes(model.selectedDishes);
    
}