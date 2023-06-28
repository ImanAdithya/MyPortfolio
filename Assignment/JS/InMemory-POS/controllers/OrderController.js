

getAllOrders();
function getAllOrders() {
    $("#tblBodyOrders").empty();

    //get all customers
    for (let i = 0; i < orderDb.length; i++) {
        let id = orderDb[i].id;
        let date = orderDb[i].date;
        let cuID = orderDb[i].customerId;

        let row = `<tr>
                     <td>${id}</td>
                     <td>${date}</td>
                     <td>${cuID}</td>
                    </tr>`;

        $("#tblBodyOrders").append(row);

    }
}