
let OrderPreID="O00-00";
let orderNo=1;

cusIds();
itemIds();
setOrderId();


function cusIds() {
    var optionCus = '';
    for (var i = 0; i < customerDetail.length; i++) {
        optionCus += '<option value="' + customerDetail[i].customerID + '">' + customerDetail[i].customerID + '</option>';
    }
    $('#cmbCusID').append(optionCus);
}

function itemIds() {

    var optionItem = '';
    for (var i = 0; i < itemDetails.length; i++) {
        optionItem += '<option value="' + itemDetails[i].itemID + '">' + itemDetails[i].itemID + '</option>';
    }
    $('#cmbItemCode').append(optionItem);
}

function setOrderId() {
    $('#InputOID').val(OrderPreID+orderNo);
    console.log(Number(orderNo));
}
$('#cmbCusID').change(function () {
    for (let i = 0; i < customerDetail.length; i++) {
        if ($(this).val()==customerDetail[i].customerID){
            $('#selectedCusName').val(customerDetail[i].customerName);
            break;
        }
    }
});

$('#cmbItemCode').change(function () {
    for (let i = 0; i < itemDetails.length; i++) {
        if ($(this).val()==itemDetails[i].itemID){
            $('#selectedItemDes').val(itemDetails[i].itemDescription);
            $('#selectedItemUp').val(itemDetails[i].itemUnitPrice);
            $('#selectedQty').val(itemDetails[i].itemQty);
            break;
        }
    }
});

$("#btnAddToCart").click(function () {
    addToCart();
});
function purchaseOrder() {
    let IdOfOrder = $('#InputOID').val();
    let dateOfOrder=$('#InputDate').val();
    let cusIDOfOrder=$('#cmbCusID').val();
    let cartDetails=orderDetailDb;

    let newOrder=Object.assign({},orderOb);
    newOrder.id=IdOfOrder;
    newOrder.date=dateOfOrder;
    newOrder.customerId=cusIDOfOrder;
    newOrder.cartDetail=cartDetails;

    orderDb.push(newOrder);



    orderNo++;
    setOrderId();
    console.log(orderNo);

    orderDetailDb=[];
    alert("order Placed Succesfully !");
    clearFields();
}

function addToCart() {
    let subTotal=0;
    let oItemID = $("#cmbItemCode").val();
    let oDesc = $("#selectedCusName").val();
    let oUnitPrice = $("#selectedItemUp").val();
    let oQty = $("#Qty").val();
    let oTotal = oUnitPrice*oQty;

    let newCart = Object.assign({}, cartOb);
    newCart.IID = oItemID;
    newCart.IName = oDesc;
    newCart.IUnitPrice = oUnitPrice;
    newCart.IQty = oQty;
    newCart.ITotal = oTotal;

    //add customer record to the customer array
    orderDetailDb.push(newCart);
    for (let i = 0; i < itemDetails.length; i++) {
        if(itemDetails[i].code==oItemID){
            itemDetails[i].qtyOnHand=itemDetails[i].qtyOnHand-oQty;
        }
    }


    //create row and add text field values
    let row=`<tr>
                    <td>${newCart.IID}</td>
                    <td>${newCart.IName}</td>
                    <td>${newCart.IUnitPrice}</td>
                    <td>${newCart.IQty}</td>
                    <td>${newCart.ITotal}</td>
                   </tr>`;
    //and then append the row to tableBody
    $("#tBodyPlaceOrder").append(row);

    for (let i = 0; i <= orderDetailDb.length; i++) {
        subTotal+=orderDetailDb[i].ITotal;
        $('#inputTotal').val(parseInt(subTotal));
        console.log(parseInt(subTotal));
    }
}

// function clearFields() {
//     $("#SelectedCusName").val("");
//     $("#selectedItemName").val("");
//     $("#UnitPriceP").val("");
//     $("#QtyOnHndP").val("");
//     $("#QtyP").val("");
//     $("#tblCartBody").empty();
//     $("#inputSubTotal").val("");
//     $("#inputTotal").val("");
//     $("#inputDiscount").val("");
//     $("#inputCash").val("");
//
// }

$('#inputCash').keydown(function (event){

    if (event.key==='Enter'){
        let balance = Number($('#inputCash').val())-Number($('#inputTotal').val());

        $('#balance').val(balance);
        //purchaseOrder();
    }

});



        