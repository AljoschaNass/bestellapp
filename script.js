
function init() {
    getFromLocalStorage();
    renderDishes();
    renderBasket()
}

function renderDishes() {
    let contentRef = document.getElementById("content");
    contentRef.innerHTML = "";

    for (let indexDish = 0; indexDish < dishes.length; indexDish++) {
            contentRef.innerHTML += getDishTemplate(indexDish);
    } 
}

function renderBasket() {
    let contentRef = document.getElementById("basket_dishes");
    contentRef.innerHTML = "";

    for (let indexDish = 0; indexDish < dishes.length; indexDish++) {
        if(dishes[indexDish].amout != 0) {
            contentRef.innerHTML += getBasketTemplate(indexDish);
        }
    } 
}

function saveToLocalStorage(){
    localStorage.setItem("dishes", JSON.stringify(dishes));
}

function getFromLocalStorage() {
    let myDishes = JSON.parse(localStorage.getItem("dishes"));
    if(myDishes != null) {
        dishes = myDishes;        
    }
}

function addOneDish(indexDish) {
    dishes[indexDish].quantity += 1;
    calcSubSum();
    calcTotalPriceDish(indexDish);
    saveToLocalStorage();
    renderBasket()
}

function deleteOneDish(indexDish) {
    dishes[indexDish].quantity -= 1;
    calcSubSum();
    calcTotalPriceDish(indexDish);
    saveToLocalStorage();
    renderBasket()
}

function deleteAllDishes(indexDish) {
    dishes[indexDish].quantity = 0;
    calcSubSum();
    calcTotalPriceDish(indexDish);
    saveToLocalStorage();
    renderBasket()
}

function calcTotalPriceDish(indexDish) {
    let amoutRef = dishes[indexDish].quantity * dishes[indexDish].price;
    dishes[indexDish].amout = amoutRef;
}

function calcSubSum() {
    let contentRef = document.getElementById("sub_sum");
    contentRef.innerHTML = "";

    let subSumRef =  0;

    for (let indexDish = 0; indexDish < dishes.length; indexDish++) {
        subSumRef += dishes[indexDish].amout;
    }
    contentRef.innerHTML = subSumRef + "€";

    calcTotalPrice(subSumRef);
}

function calcTotalPrice(subSumRef) {
    let contentRef = document.getElementById("total_price");
    contentRef.innerHTML = "";

    let totalPriceRef = subSumRef + 5;
    contentRef.innerHTML = totalPriceRef + "€";
}