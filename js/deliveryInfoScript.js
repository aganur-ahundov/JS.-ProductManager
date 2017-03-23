/**
 * Created by Aganurych on 23.03.2017.
 */

var delivery = new Delivery();

function InitDeliveryBlock() {
    delivery.InitByDefault();

    document.querySelector('.delivery-phone').textContent = delivery.getPhone() + ' | ';
    document.querySelector('.delivery-date').textContent = delivery.getDate() + ' | ';
    document.querySelector('.delivery-provider').textContent = delivery.getProvider() + ' | ';
    document.querySelector('.delivery-city').textContent = delivery.getCity() + ' | ';

    document.getElementsByClassName('changeDeliveryInfoDiv')[0].style.display = 'none';

    document.getElementsByName('changeDeliveryInfoButton')[0]
        .addEventListener('click', DisplayChangeDeliveryForm);

    document.getElementsByName('submitDeliveryChanges')[0]
        .addEventListener('click', changeDeliveryInfo);

    document.getElementsByName('cancelDeliveryChanges')[0]
        .addEventListener('click', HideChangeDeliveryForm);

    HideChangeDeliveryForm();
}

function DisplayChangeDeliveryForm(){
    //use let
    var changeDiv = document.getElementsByClassName('changeDeliveryInfoDiv')[0];

    //isVisible
    if( changeDiv.style.display == 'none') {
        changeDiv.style.display = 'block';
    }
}

//скрываем панель заказчика
function HideChangeDeliveryForm(){
    document.querySelector('.changeDeliveryInfoDiv').style.display = 'none';
    document.getElementsByName('delivery-changePhone')[0].value = "";
    document.getElementsByName('delivery-changeDate')[0].value = "";
    document.getElementsByName('delivery-changeProvider')[0].value = "";
    document.getElementsByName('delivery-changeCity')[0].value = "";
}

//применяем изменения
function changeDeliveryInfo(){

    if( delivery.setDate( document.getElementsByName('delivery-changeDate')[0].value ) ) {
        document.querySelector('.delivery-date').textContent = delivery.getDate() + ' | ';
    }

    if( delivery.setPhone(document.getElementsByName('delivery-changePhone')[0].value)) {
        document.querySelector('.delivery-phone').textContent = delivery.getPhone() + ' | ';
    }

    if( delivery.setProvider(document.getElementsByName('delivery-changeProvider')[0].value) ) {
        document.querySelector('.delivery-provider').textContent = delivery.getProvider() + ' | ';
    }

    if( delivery.setCity(document.getElementsByName('delivery-changeCity')[0].value) ) {
        document.querySelector('.delivery-city').textContent = delivery.getCity() + ' | ';
    }

    HideChangeDeliveryForm();
}
/**********************************************/