var SideMenu =function(container, model){
    
    this.container = container;
    
    this.numberOfGuests = container;
    this.numberOfGuests.html('<h3>My dinner</h3><select id="numberOfGuests"><option>1</option><option>2</option><option>3</option></select>');
    this.numberOfGuests = container.find("#numberOfGuests");
    this.numberOfGuests.before('<div>People:</div>');

    this.getNumberOfGuests=function(){
        return this.numberOfGuests.find('option:selected').val();
    }
    
    this.update=function(obj,arg){
        // set number of guests, change view with model
        console.log("updating guests");
        container.find('#totalPrice').html('In Total:'+model.getNumberOfGuests());
        
    }
    model.addObserver(this.update); 
    this.update(container);

    
    function createMenu(menu) {
        var table = $('<table class="table table-hover"></table>');
        table.append('<th>dish</th><th>cost</th>');
        var length = menu.length;
        for(i=0; i < length; i++){
            var row = $('<tr></tr>');
            var cost = 0;
            for(j=0;j<menu[i].ingredients.length;j++){
                cost += menu[i].ingredients[j].price;
            }
            row.append('<td>'+menu[i].name+'</td>');
            row.append('<td>'+cost+'</td>');
            table.append(row);
        }
        
        container.append(table);
        //console.log(this.numberOfGuests);
        table.after('<div><button class="btn">Confirm Dinner</button></div>');
        //table.after('<div>In Total:'+model.getTotalMenuPrice()+'</div>');
        table.after('<div id="totalPrice">In Total:'+container.find('option:selected').val()+'</div>');
    }
    createMenu(model.getFullMenu());
 
}