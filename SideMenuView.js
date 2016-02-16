var SideMenu =function(container, model){
    this.numberOfGuests = container.find("#numberOfGuests");
//    this.numberOfGuests.insertBefore('<label>People</label>');
    this.numberOfGuests.html('<option>1</option><option>2</option><option>3</option>');
    this.numberOfGuests.before('<div>People:</div>')
    function createMenu(menu) {
        var table = $('<table class="table table-hover"></table>');
        table.append('<th>dish</th><th>cost</th>')
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

        $('#sideMenu').append(table);
        
        table.after('<div><a href="print.html"><button class="btn">Confirm Dinner</button></a></div>');
        table.after('<div>In Total:</div>');
        
    }
        createMenu(model.getFullMenu());
        
}