const itemCodeRegex = /^(I00-)[0-9]{3}$/;
const itemNameRegex = /^[A-Za-z ]{3,}$/;
const itemQtyRegex = /^[0-9]+$/;
const itemUpRegex= /^[0-9]{2,}([.][0-9]{2})?$/;

$("#itemID,#description,#quantity,#uPrice").keydown(function (e) {
    if (e.keyCode==9){//key=="Tab"
        e.preventDefault();
    }
});

$("#itemID").keydown(function (e) {
    if (e.key=="Enter"  && itemCodeRegex.test($('#itemID').val())){
        $(this).css("background-color","white","!important");
        $('#description').focus();
    }
});

$("#itemID").keyup(function (e) {
    if (itemCodeRegex.test($('#itemID').val())){
        $(this).css("background-color","green","!important");
    }else{
        $(this).css("background-color","red","!important");
    }
});

$("#description").keydown(function (e) {
    if (e.key=="Enter"  && itemNameRegex.test($('#description').val())){
        $(this).css("background-color","white","!important");
        $('#uPrice').focus();
    }
});

$("#description").keyup(function (e) {
    if (itemNameRegex.test($('#description').val())){
        $(this).css("background-color","green","!important");
    }else{
        $(this).css("background-color","red","!important");
    }
});
$("#uPrice").keydown(function (e) {
    if (e.key=="Enter"  && itemUpRegex.test($('#uPrice').val())){
        $(this).css("background-color","white","!important");
        $('#quantity').focus();
    }
});

$("#uPrice").keyup(function (e) {
    if (itemUpRegex.test($('#uPrice').val())){
        $(this).css("background-color","green","!important");
    }else{
        $(this).css("background-color","red","!important");
    }
});
$("#quantity").keydown(function (e) {
    if (e.key=="Enter" && itemQtyRegex.test($('#quantity').val())){
        $(this).css("background-color","white","!important");
        saveItem();
    }
});
$("#quantity").keyup(function (e) {
    if (itemQtyRegex.test($('#quantity').val())){
        $(this).css("background-color","green","!important");
    }else{
        $(this).css("background-color","red","!important");
    }
});
