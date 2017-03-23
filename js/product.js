/**
 * Created by Aganurych on 21.03.2017.
 */

function StandartProduct() {
    this.title;
    this.photo;
    this.price;
    this.quantity;
}

function ExclusiveProduct() {
    StandartProduct.apply(this, arguments);
    this.Environment;
    this.Diameter;
    this.Material;
}


//ExclusiveProduct.__proto__ = StandartProduct;
ExclusiveProduct.prototype = Object.create(StandartProduct.prototype);


//STANDART PRODUCT METHODS
StandartProduct.prototype.InitProduct = function(_title, _photo )
{
    this.setTitle( _title );
    this.photo = _photo;
}

StandartProduct.prototype.setTitle = function( _title )
{
    if(_title != "")
        this.title = _title;
    else
        console.log("Пустое название объекта!");
}

StandartProduct.prototype.getTitle = function( _title )
{
    return this.title;
}

StandartProduct.prototype.setPhoto = function( _photo )
{
    if(_photo != null)
        this.photo = _photo;
    else
        console.log("Изображение не загруженно!");
}

StandartProduct.prototype.getPhoto = function( )
{
    return this.photo;
}

StandartProduct.prototype.setPrice = function( _price ){
    if(_price > 0)
    {
        this.price = _price;
        return true;
    }
    else
    {
        console.log("Цена должна быть положительной");
        return false;
    }
}

StandartProduct.prototype.getPrice = function () {
    return this.price;
}

StandartProduct.prototype.setQuantity = function ( _quantity ) {
    if(_quantity > 0) {
        this.quantity = _quantity;
        return true;
    }
    else
        console.log("Количество должно быть положительным");

    return false;
}

StandartProduct.prototype.getQuantity = function () {
    return this.quantity;
}

StandartProduct.prototype.getTotalSum = function () {
    return (this.getPrice() * this.getQuantity());
}
/////////////////////////////////////////////////////////////////


/*EXCLUSIVE PRODUCT METHODS*/
ExclusiveProduct.prototype.getEnvironment = function () {
    return this.Environment;
}

ExclusiveProduct.prototype.setEnvironment = function (_env) {
    if(_env != "")
        this.Environment = _env;
    else
        console.log("Пусто поле рабочая среда")
}

ExclusiveProduct.prototype.getMaterial = function () {
    return this.Material;
}

ExclusiveProduct.prototype.getDiameter = function () {
    return this.Diameter;
}

ExclusiveProduct.prototype.setMaterial = function ( _m ) {
    if(_m != "")
        this.Material = _m;
    else
        console.log("Пустое поле материал");
}

ExclusiveProduct.prototype.setDiameter = function ( _d ) {
    if(_d > 0)
        this.Diameter = _d;
    else
        console.log("Диаметр должен быть положительный");
}