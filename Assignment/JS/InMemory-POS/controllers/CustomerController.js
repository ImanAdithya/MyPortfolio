
getAllCustomer();

$('#btnGetAll').click(function () {
    getAllCustomer();
});

$('#onActionSave').click(function () {
    saveCustomer();
    //let tr=$('<tr> <td>'+customerDetail.customerID+'</td> <td>'+customerDetail.customerName+'</td> <td>'+customerDetail.customerAddress+'</td> <td>'+customerDetail.customerContact+'</td></tr>');
    //$("#tblcustomer").append(tr);
});

function bindCustomerTrEvents() {
    $('#customerTbody>tr').click(function (event) {

        let id=$(this).children().eq(0).text();
        let name=$(this).children().eq(1).text();
        let address= $(this).children().eq(2).text();
        let contact=$(this).children().eq(3).text();

        $('#cusID').val(id);
        $('#cusName').val(name);
        $('#cusAddress').val(address);
        $('#cusContact').val(contact);

    });
}

function saveCustomer() {
    let cusID=$('#cusID').val();
    let cusName=$('#cusName').val();
    let cusAddress=$('#cusAddress').val();
    let cusContact=$('#cusContact').val();

    let newCustomer = Object.assign({}, customerOb);
    newCustomer.customerID=cusID;
    newCustomer.customerName=cusName;
    newCustomer.customerAddress=cusAddress;
    newCustomer.customerContact=cusContact;



    if (checkValidtion()){
        customerDetail.push(newCustomer);
        clearCustomerFeilds();
        getAllCustomer();

    }else {
        alert("THIS CUSTOMER ALREADY IN THIS SYSTEM");
        clearCustomerFeilds();
    }
}

function getAllCustomer() {
    $('#customerTbody').empty();
    for (let i = 0; i <customerDetail.length ; i++) {

        let id=customerDetail[i].customerID;
        let name=customerDetail[i].customerName;
        let address=customerDetail[i].customerAddress;
        let contact=customerDetail[i].customerContact;

        let row=`<tr>
                    <td>${id}</td>
                    <td>${name}</td>
                    <td>${address}</td>
                    <td>${contact}</td>
                </tr>`
        $("#tblcustomer").append(row);
        bindCustomerTrEvents();
    }
}
$('#btnDelete').click(function () {
    for (let i = 0; i < customerDetail.length; i++) {
        if (customerDetail[i].customerID==$('#cusID').val()){
            customerDetail.splice(i,1);
            getAllCustomer();
            clearCustomerFeilds();
            break;
        }
    }
});
$('#btnCustomerUpdate').click(function () {

    let consent=confirm("DO U WANT UPDATE THIS CUSTOMER");

    if (consent){
        for (let i = 0; i < customerDetail.length; i++) {
            if ($('#cusID').val()==customerDetail[i].customerID){
                customerDetail[i].customerID=$('#cusID').val();
                customerDetail[i].customerName=$('#cusName').val();
                customerDetail[i].customerAddress=$('#cusAddress').val();
                customerDetail[i].customerContact=$('#cusContact').val();
                getAllCustomer();
                clearCustomerFeilds();
                alert("UPDATED SUCSUS");
                break;
            }
        }
    }
});

function checkValidtion() {
    for (let i = 0; i < customerDetail.length; i++) {
        if ($('#cusID').val()==customerDetail[i].customerID){
            return false;
        }
    }
    return true;
}
function clearCustomerFeilds() {
    $("#cusID,#cusName,#cusAddress,#cusContact").val("");
    $('#cusID').focus();
}

