/**
 * Created by Aganurych on 21.03.2017.
 */

function Delivery() {
    this.phoneNumber;
    this.provider;
    this.deliveryCity;
    this.date;
}

Delivery.prototype.InitByDefault = function () {
    this.setPhone('+38011111112');
    this.setProvider('Nova Pochta');
    this.setCity('Kharkov');
    this.setDate('01.04.2017');
}


Delivery.prototype.getPhone = function () {
    return this.phoneNumber;
}

Delivery.prototype.getProvider = function () {
    return this.provider;
}

Delivery.prototype.getCity = function () {
    return this.deliveryCity;
}

Delivery.prototype.getDate = function () {
    return this.date;
}

Delivery.prototype.setDate = function (_date) {
    var reg_exp = /^\d{1,2}.\d{1,2}.\d{4}$/

    if(reg_exp.test(_date))
    {
        this.date = _date;
        return true;
    }

    console.log("Дата введена не верно");
    return false;
}


Delivery.prototype.setPhone = function ( _number) {
    var reg_exp = /^\+\d{9,14}$/

    if(reg_exp.test(_number))
    {
        this.phoneNumber = _number;
        return true;
    }

    console.log("Номер телефона введен не верно");
    return false;
}


Delivery.prototype.setProvider = function ( _name ) {
    if(_name != "")
    {
        this.provider = _name;
        return true;
    }

    console.log("Имя не должно быть пустым!");
    return false;
}

Delivery.prototype.setCity = function ( _city ) {
    if( _city != "")
    {
        this.deliveryCity = _city ;
        return true;
    }

    console.log("Имя не должно быть пустым!");
    return false;
}