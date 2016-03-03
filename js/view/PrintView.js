var PrintView = function(container, model){
    this.container = container;
    container.html('<div class="row"><div class="col-md-6" id="printTop"><h2 class="printheader">My Dinner: '+model.getNumberOfGuests()+ 'people</h2></div><div class="col-md-6"><button class="back btn">Go back and edit dinner</button></div></div>');
    container.append('<div class="printMenu"><table class="table" id="PrintTable"></table></div>');
    
    function printMenu(menu){

        var table = container.find('#PrintTable');
        var length = menu.length;
        
        for(i=0; i < length; i++){
            var row = $('<tr></tr>');
            row.append('<td>'+'<img src="'+menu[i].ImageURL+'" style="height:120px; width:120px"></td>');
            //row.append('<td><h4>'+menu[i].name+'</h4><br>'+ model.getAllIngredients(menu[i].id) +'</td>');
            row.append('<td><h4>'+menu[i].Title+'</h4><br>'+menu[i].Description+'</td>');
            row.append('<td>'+menu[i].Instructions+'</td>');

            table.append(row);
        }

        container.find('.printMenu').append(table);
    }
    
    this.updatePM=function(obj){
       if(obj==="removeDish"||obj==="addDish"){
            container.find('#PrintTable').empty();
            printMenu(model.getFullMenu());
            //console.log('get full menu');
            container.find(".printheader").html("My dinner: "+model.getNumberOfGuests()+" people");
       }
    }
    model.addObserver(this.updatePM); 
    this.updatePM(container);
}


            

    