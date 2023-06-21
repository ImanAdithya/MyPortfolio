//DISABLE TAB
//keydown=get press key

let cusIdRegex=/^(C00-)[0-9]{3}$/;
let cusNameRegex=/^[A-Za-z\s]+$/;
let cusAddressRegex=/^[A-Za-z\s]+$/;
let cusContactRegex= /^\d{10}$/;


$("#cusID,#cusName,#cusAddress,#cusContact").keydown(function (e) {
    if (e.keyCode==9){//key=="Tab"
        e.preventDefault();
    }
});

$("#cusID").keydown(function (e) {
    if (e.key=="Enter"  && cusIdRegex.test($('#cusID').val())){
        $(this).css("background-color","white","!important");
        $('#cusName').focus();
    }
});

$("#cusID").keyup(function (e) {
    if (cusIdRegex.test($('#cusID').val())){
        $(this).css("background-color","green","!important");
    }else{
        $(this).css("background-color","red","!important");
    }
});

$("#cusName").keydown(function (e) {
    if (e.key=="Enter"  && cusNameRegex.test($('#cusName').val())){
        $(this).css("background-color","white","!important");
        $('#cusAddress').focus();
    }
});

$("#cusName").keyup(function (e) {
    if (cusNameRegex.test($('#cusName').val())){
        $(this).css("background-color","green","!important");
    }else{
        $(this).css("background-color","red","!important");
    }
});
$("#cusAddress").keydown(function (e) {
    if (e.key=="Enter"  && cusAddressRegex.test($('#cusAddress').val())){
        $(this).css("background-color","white","!important");
        $('#cusContact').focus();
    }
});

$("#cusAddress").keyup(function (e) {
    if (cusAddressRegex.test($('#cusAddress').val())){
        $(this).css("background-color","green","!important");
    }else{
        $(this).css("background-color","red","!important");
    }
});
$("#cusContact").keydown(function (e) {
    if (e.key=="Enter" && cusContactRegex.test($('#cusContact').val())){
        $(this).css("background-color","white","!important");
        saveCustomer();
    }
});
$("#cusContact").keyup(function (e) {
    if (cusContactRegex.test($('#cusContact').val())){
        $(this).css("background-color","green","!important");
    }else{
        $(this).css("background-color","red","!important");
    }
});
