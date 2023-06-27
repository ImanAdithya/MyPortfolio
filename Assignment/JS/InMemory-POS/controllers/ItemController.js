getItemALl();

$('#btnItemGetAll').click(function () {
    getItemALl();
});

$('#onActionSaveItem').click(function () {
    saveItem();
});

function bindItemTrEvents() {
    $('#itemTbody>tr').click(function (event) {

        let idT=$(this).children().eq(0).text();
        let des=$(this).children().eq(1).text();
        let uP= $(this).children().eq(2).text();
        let q=$(this).children().eq(3).text();

        $('#itemID').val(idT);
        $('#description').val(des);
        $('#uPrice').val(uP);
        $('#quantity').val(q);

    });
}
function getItemALl() {
    $('#itemTbody').empty();
    for (let i = 0; i < itemDetails.length; i++) {
        let id = itemDetails[i].itemID;
        let des = itemDetails[i].itemDescription;
        let up = itemDetails[i].itemUnitPrice;
        let q = itemDetails[i].itemQty

        let itemRow = `<tr>
                    <td>${id}</td>
                    <td>${des}</td>
                    <td>${up}</td>
                    <td>${q}</td>
                </tr>`

        $('#tblItem').append(itemRow);
        bindItemTrEvents();
    }
}
function saveItem() {
    let iId=$('#itemID').val();
    let description=$('#description').val();
    let unitPrice=$('#uPrice').val();
    let qty=$('#quantity').val();

    let newItem=Object.assign({},ItemOb);
    newItem.itemID=iId;
    newItem.itemDescription=description;
    newItem.itemUnitPrice=unitPrice;
    newItem.itemQty=qty;

    if (checkValidationItem()){
        itemDetails.push(newItem);
        getItemALl();
        clearItemFeilds();
    }else{
        alert("THIS ITEM ALREADY IN THIS SYSTEM");
        clearItemFeilds();
    }
}
$('#btnItemDelete').click(function () {
    for (let i = 0; i < itemDetails.length; i++) {
        if (itemDetails[i].itemID==$('#itemID').val()){
            itemDetails.splice(i,1);
            getItemALl();
            clearItemFeilds()
            break;
        }
    }
});

$('#btnItemUpdate').click(function () {

    let itemConsent=confirm("DO YOU WANT UPDATE THIS ITEM");

    if (itemConsent){
        for (let i = 0; i < itemDetails.length; i++) {
            if ($('#itemID').val()==itemDetails[i].itemID){
                itemDetails[i].itemID=$('#itemID').val();
                itemDetails[i].itemDescription=$('#description').val();
                itemDetails[i].itemUnitPrice=$('#uPrice').val();
                itemDetails[i].itemQty=$('#quantity').val();
                getItemALl();
                clearItemFeilds();
                alert("ITEM UPDATED SUCCUSS");
                break;
            }
        }
    }

});
function checkValidationItem() {
    for (let i = 0; i < itemDetails.length; i++) {
        if($('#itemID').val()==itemDetails[i].itemID){
            return false;
        }
    }
    return true;
}

function clearItemFeilds() {
    $("#itemID,#description,#uPrice,#quantity").val("");
    $('#itemID').focus();
}
