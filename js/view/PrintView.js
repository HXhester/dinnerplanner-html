var PrintView = function(container, model){
    this.container = container;
    container.html('<div id="printTop"><h2 class="left">My Dinner: 4 people</h2><a href="index.html" class="right"><button id="back" class="btn">Go back and edit dinner</button></a></div>');
    container.append('<div class="printMenu"></div>');
    
    function printMenu(menu){
        var table = $('<table class="table"></table>');
        var length = menu.length;
        for(i=0; i < length; i++){
            var row = $('<tr></tr>');
            row.append('<td>'+'<img src="images/'+menu[i].image+'" style="height:120px; width:120px"> </td>');
            row.append('<td><h4>'+menu[i].name+'</h4><br>'+menu[i].description+'</td>');
            row.append('<td>'+menu[i].description+'</td>');
            table.append(row);
        }

        $('.printMenu').append(table);
    }
    
    printMenu(model.getFullMenu());
}


            

    