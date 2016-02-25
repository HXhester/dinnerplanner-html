var SideMenu =function(container, model){
    
    this.container = container;
    
    this.numberOfGuests = container;
    this.numberOfGuests.html('<h3>My dinner</h3><select id="numberOfGuests"><option>1</option><option>2</option><option>3</option></select>');
    this.numberOfGuests = container.find("#numberOfGuests");
    this.numberOfGuests.before('<div>People:</div>');

    this.getNumberOfGuests=function(){
        return this.numberOfGuests.find('option:selected').val();
    }

    
    this.numberOfGuests.after('<div><table class="table table-hover" id="selectMenu"></table></div>');
    
    
    function createMenu(menu) {
        //var table = $('<div id="selectMenuTable"><table class="table table-hover" id="selectMenu"></table></div>');
        var table = container.find('#selectMenu')
        //table.append('<table class="table table-hover" id="selectMenu"></table>');
        table.append('<th>dish</th><th>cost</th>');
        var length = menu.length;
        for(i=0; i < length; i++){
            var row = $('<tr class="hoverDelete"></tr>');
            var cost = 0;
            for(j=0;j<menu[i].ingredients.length;j++){
                cost += menu[i].ingredients[j].price;
            }
            row.append('<td>'+menu[i].name+'</td>');
            row.append('<td>'+cost+'<img src="images/delete.png" class="delete" id="'+menu[i].id+'" style="width:20%; float:right; display:none"></td>');
            table.append(row);
        }
        
        container.append(table);
        table.append('<div><button class="btn" id="confirm">Confirm Dinner</button></div>');
        table.append('<div id="totalPrice">In Total:'+model.getTotalMenuPrice()+'</div>');
    
    }
    
    
    //createMenu(model.getFullMenu());
    this.update=function(obj,arg){
        // Calculate price of the menu
        container.find('#totalPrice').html('In Total:'+model.getNumberOfGuests());
        
        // When the selected menu changes, update the table
        //container.find('#selectMenuTable').html(''); both works
        container.find('#selectMenu').empty();
        createMenu(model.getFullMenu());
        
    }
    model.addObserver(this.update); 
    this.update(container);
 
}