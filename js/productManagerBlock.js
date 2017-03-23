/**
 * Created by Aganurych on 21.03.2017.
 */

var changeProduct = null;
var totalSum = 0;


//инициализируем "блок покупателя"
function initOrderLine() {
    document.getElementById('addNewProduct')
        .addEventListener('click', createProductShowForm);

    document.getElementsByName('isExclusive')[0]
        .addEventListener('change', DoExclusive);

    document.getElementById('submitFormChanges')
        .addEventListener('click',addNewProduct);

    document.getElementById("cancelFormChanges")
        .addEventListener('click', HideAddNewProductForm);

    document.querySelector('.exmpl-line')
        .style.display = 'none';
}

//пользователь выбирает какой тип продукта создать
function DoExclusive() {
   var checkbox = document.getElementsByName('isExclusive')[0];
   disableExclusiveFields(!checkbox.checked);
}

//Делаем доступными или не доступными поля для эксклюзивного продукта
function disableExclusiveFields( isExclusive ) {
    document.getElementsByName('form-envirt')[0].disabled = isExclusive;
    document.getElementsByName('form-diameter')[0].disabled = isExclusive;
    document.getElementsByName('form-material')[0].disabled = isExclusive;
}

//Отображаем форму для создания товара
function createProductShowForm(){

    document.querySelector('.modal-bg')
        .style
        .display = 'block';
    disableExclusiveFields(true);
}

//создаем и добавляем на страницу созданный товар
function addNewProduct() {

    //берем готовый пример формы, меняем название класса и делаем видимым
    var newLine = document.querySelector('.exmpl-line').cloneNode(true);
    newLine.className = 'line';


    //Выбор тип продукта
    if(document.getElementsByName('isExclusive')[0].checked == false)
     {
         var newProduct = new StandartProduct();
         if(fillStandartProductField(newProduct) == false) //проверяем заполнил ли пользователь все необходимые поля формы
            return;

         newLine.querySelector('.product-exclusive').innerHTML = "Standart";
         fillRequiredFields( newLine, newProduct.getTitle(), newProduct.getPrice(),
                                      newProduct.getQuantity(), newProduct.getTotalSum());
         //newLine.querySelector('.product-photo').innerHTML = newProduct.getPhoto();
     }
     else{
        var newProduct = new ExclusiveProduct();
        if(fillStandartProductField(newProduct) == false)
            return;

        //пичкаем данными класс продукт и проверяем инварианты
        newProduct.setMaterial(document.getElementsByName('form-material')[0].value);
        newProduct.setDiameter(document.getElementsByName('form-diameter')[0].value);
        newProduct.setEnvironment(document.getElementsByName('form-envirt')[0].value)


        //записываем данные о новом товаре на страницу
        newLine.querySelector('.product-exclusive').innerHTML = "Exclusive";
        fillRequiredFields( newLine, newProduct.getTitle(), newProduct.getPrice(),
            newProduct.getQuantity(), newProduct.getTotalSum());

        newLine.querySelector('.product-material').innerHTML = 'Material: ' + newProduct.getMaterial();
        newLine.querySelector('.product-diameter').innerHTML = 'Diameter: ' + newProduct.getDiameter();
        newLine.querySelector('.product-envirt').innerHTML = 'Work Environment: ' + newProduct.getEnvironment();

    }

    var input = document.querySelector('#input-file');
    var image = document.createElement('img');//newLine.querySelector('img');
    image.className = "product-img-res";

    if (input.files && input.files[0]) {

        newLine.insertBefore(image, newLine.getElementsByTagName('button')[0]);
        var reader = new FileReader();
        reader.onload = function (e) {

            var image = newLine.querySelector('.product-img-res');
            image.src = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
    }

    if(changeProduct != null) //если мы изменяем уже существующий продукт
    {
        totalSum -= changeProduct.querySelector('.totalSumNumber');

        document.querySelector('.orderLine').insertBefore(newLine, changeProduct.parentNode.nextSibling);
        deleteProduct(changeProduct);
        changeProduct = null;
    }
    else { //если создаем новый
        document.querySelector('.orderLine').appendChild(newLine); //добавляем продукт на страницу

    }

        totalSum += newProduct.getTotalSum();
        HideAddNewProductForm(); //прячем форму
        document.querySelector('.totalSum').textContent = 'Total: ' + totalSum;
}

//Проверяем и заполняем обязательные поля товара (имя, цена, количество)
function fillStandartProductField( product ) {
    product.InitProduct(
        document.getElementsByName('form-name')[0].value,
        document.getElementsByName('form-img')[0].value
    );

    if(product.getTitle() == undefined ||
        !product.setPrice(document.getElementsByName('form-price')[0].value) ||
        !product.setQuantity(document.getElementsByName('form-quantity')[0].value))
    {
        alert("Заполнены не все необходимые поля (имя, цена, количество)");
        return false;
    }

    return true;
}

//заполняем блок с информацией о новом товаре
function fillRequiredFields( _form, _title, _price, _quantity, _sum) {
    _form.querySelector('.product-name').innerHTML = 'Title: ' + _title;
    _form.querySelector('.product-price').innerHTML = 'Price: ' + _price;
    _form.querySelector('.product-quantity').innerHTML = 'Quantity: ' + _quantity;
    _form.querySelector('.product-totalSum').innerHTML = 'Total: ' + _sum;

    //будет удобно вычитать общую сумму за товар из общей суммы за покупку
    _form.querySelector('.totalSumNumber').textContent = _sum;
    _form.querySelector('.totalSumNumber').style.display = 'none';
}

//удаляем продукт
function deleteProduct( event ) {
    console.log(event.parentNode.querySelector('.totalSumNumber'));
    totalSum -= event.parentNode.querySelector('.totalSumNumber').innerHTML;
    document.querySelector('.orderLine').removeChild( event.parentNode );
    document.querySelector('.totalSum').textContent = 'Total: ' + totalSum;
}

//чистим форму от старых данных
function clearAddNewProductForm(){
    document.getElementsByName('isExclusive')[0].checked = false;
    document.getElementsByName('form-name')[0].value = "";
    document.getElementsByName('form-envirt')[0].value = "";
    document.getElementsByName('form-diameter')[0].value = "";
    document.getElementsByName('form-material')[0].value = "";
    document.getElementsByName('form-price')[0].value = "";
    document.getElementsByName('form-quantity')[0].value = "";
}


function HideAddNewProductForm(){
    clearAddNewProductForm();
    document.querySelector('.modal-bg').style.display = 'none';
}


function changeProductInfo( event ) {
    changeProduct = event;
    createProductShowForm();
}