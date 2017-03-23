/**
 * Created by Aganurych on 21.03.2017.
 */

function Order() {
    this.date;
    this.phoneNumbers;
    this.fullName;

}

Order.prototype.Init = function () {
    this.date = "21.03.2017";
    this.phoneNumber = "+380000000001";
    this.fullName = "New User";
}


Order.prototype.setDate = function (_date) {
    var reg_exp = /^\d{1,2}.\d{1,2}.\d{4}$/

    if(reg_exp.test(_date))
    {
        this.date = _date;
        return true;
    }

    console.log("Дата введена не верно");
    return false;
}

Order.prototype.getDate = function () {
    return this.date;
}


Order.prototype.setPhone = function ( _number ) {
    var reg_exp = /^\+\d{9,14}$/

    if(reg_exp.test(_number))
    {
        this.phoneNumber = _number;
        return true;
    }

    console.log("Номер телефона введен не верно");
    return false;
}

Order.prototype.getPhone = function () {
    return this.phoneNumber;
}


Order.prototype.setName = function ( _name ) {
    if(_name != "")
    {
        this.fullName = _name;
        return true;
    }

    console.log("Имя не должно быть пустым!");
    return false;
}

Order.prototype.getName = function () {
    return this.fullName;
}