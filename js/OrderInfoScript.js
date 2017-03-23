/**
 * Created by Aganurych on 23.03.2017.
 */

//устанавливает панель заказчика по умолчанию
var defaultOrder = new Order();
defaultOrder.Init();

//ORDER INFO FUNCTIONS
function initOrderInfo() {
    //заполняем информацию про заказчика
    document.querySelector('.label-date').textContent = defaultOrder.getDate() + ' | ';
    document.querySelector('.label-phone').textContent = defaultOrder.getPhone() + ' | ';
    document.querySelector('.label-name').textContent = defaultOrder.getName() + ' | ';
    document.querySelector('.changeOrderField').style.display = 'none';

    document.getElementsByClassName('order-info')[0]
        .getElementsByTagName('button')[0]
        .addEventListener('click', DisplayChangeOrderFieldBox );

    document.getElementById('submitOrderChanges')
        .addEventListener('click', changeField);

    document.getElementById('cancelOrderChanges')
        .addEventListener('click', HideChangeOrderFieldBox);
}

//выводим на страницу форму для изменения данных о заказчике
function DisplayChangeOrderFieldBox(){
    //use let
    var txtBox = document.getElementsByClassName('changeOrderField')[0];

    //isVisible
    if( txtBox.style.display == 'none') {
        txtBox.style.display = 'block';
    }
}

//скрываем панель заказчика
function HideChangeOrderFieldBox(){
    document.querySelector('.changeOrderField').style.display = 'none';
    document.getElementsByName('changeOrderDate')[0].value = "";
    document.getElementsByName('changeOrderNumber')[0].value = "";
    document.getElementsByName('changeOrderName')[0].value = "";
}

//применяем изменения
function changeField(){

    if( defaultOrder.setDate( document.getElementsByName('changeOrderDate')[0].value ) ) {
        document.querySelector('.label-date').textContent = defaultOrder.getDate() + ' | ';
    }

    if(defaultOrder.setPhone(document.getElementsByName('changeOrderNumber')[0].value)) {
        document.querySelector('.label-phone').textContent = defaultOrder.getPhone() + ' | ';
    }

    if(defaultOrder.setName(document.getElementsByName('changeOrderName')[0].value) ) {
        document.querySelector('.label-name').textContent = defaultOrder.getName() + ' | ';
    }

    HideChangeOrderFieldBox();
}
/**********************************************/