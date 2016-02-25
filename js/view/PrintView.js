var PrintView = function(container, model){
    this.container = container;
    container.html('<div id="printTop"><h2 class="left">My Dinner: 4 people</h2><button id="back" class="btn">Go back and edit dinner</button></div>');
    container.append('<div class="printMenu"><table class="table" id="PrintTable"></table></div>');
    
    function printMenu(menu){

        var table = container.find('#PrintTable');
        var length = menu.length;
        for(i=0; i < length; i++){
            var row = $('<tr></tr>');
            row.append('<td>'+'<img src="images/'+menu[i].image+'" style="height:120px; width:120px"> </td>');
            row.append('<td><h4>'+menu[i].name+'</h4><br>'+menu[i].description+'</td>');
            row.append('<td>'+menu[i].description+'</td>');
            table.append(row);
        }

        container.find('.printMenu').append(table);
    }
    
    this.updatePM=function(obj,arg){
       
        container.find('#PrintTable').empty();
        printMenu(model.getFullMenu());
        console.log('get full menu');
    }
    model.addObserver(this.updatePM); 
    this.updatePM(container);
}


            

    