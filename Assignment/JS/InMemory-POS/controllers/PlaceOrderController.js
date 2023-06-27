
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
    placeOrder();
});

function placeOrder() {
    $
}


        