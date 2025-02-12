
function init() {
    getFromLocalStorage();
    renderDishes();
    renderBasket();
    calcSubSum();
}

function renderDishes() {
    let contentRef = document.getElementById("content_dishes");
    contentRef.innerHTML = "";

    for (let indexDish = 0; indexDish < dishes.length; indexDish++) {
            contentRef.innerHTML += getDishTemplate(indexDish);
    } 
}

function renderBasket() {
    let contentRef = document.getElementById("basket_dishes");
    contentRef.innerHTML = "";

    for (let indexDish = 0; indexDish < dishes.length; indexDish++) {
        if(dishes[indexDish].quantity != 0) {
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
    calcTotalPriceDish(indexDish);
    saveToLocalStorage();
    renderBasket()
}

function deleteOneDish(indexDish) {
    dishes[indexDish].quantity -= 1;
    calcTotalPriceDish(indexDish);
    saveToLocalStorage();
    renderBasket()
}

function deleteAllDishes(indexDish) {
    dishes[indexDish].quantity = 0;
    calcTotalPriceDish(indexDish);
    saveToLocalStorage();
    renderBasket()
}

function calcTotalPriceDish(indexDish) {
    let amoutRef = dishes[indexDish].quantity * dishes[indexDish].price;
    amoutRef = formatNumsToString(amoutRef);
    dishes[indexDish].amout = "";
    dishes[indexDish].amout = amoutRef;
    calcSubSum();
}

function calcSubSum() {
    let contentRef = document.getElementById("sub_sum");
    contentRef.innerHTML = "";

    let subSumRef =  0;
    for (let indexDish = 0; indexDish < dishes.length; indexDish++) {
        let string = dishes[indexDish].amout;
        subSumRef += formatStringsToNums(string);
    }
    ifBasketEmpty(subSumRef, contentRef);
    calcTotalPrice(subSumRef);
}

function calcTotalPrice(subSumRef) {
    let contentRef = document.getElementById("total_price");
    contentRef.innerHTML = "";

    let totalPriceRef = subSumRef + setDeliveryPrice(subSumRef);
    if(subSumRef == 0) {
        contentRef.innerHTML = "-";
    } else {
        contentRef.innerHTML = formatNumsToString(totalPriceRef) + "€";
    }
}

function formatNumsToString(num) {
    let numRef = parseFloat(num);  
    numRef = numRef.toFixed(2);
    numRef = numRef.toString();
    numRef = numRef.replace(".", ",");
    num = numRef;
    return num;
}

function formatStringsToNums(string) {
    let stringRef = string;
    stringRef = stringRef.toString();    
    stringRef = stringRef.replace(",", ".");
    stringRef = parseFloat(stringRef);
    string = stringRef;
    return string;
}

function ifBasketEmpty(sumRef, contentRef) {
    if(sumRef == 0) {
        contentRef.innerHTML = "-";
    } else {
        contentRef.innerHTML = formatNumsToString(sumRef) + "€";
    }
}

function setDeliveryPrice(subSumRef) {
    let contentRef = document.getElementById("delivery_price");
    contentRef.innerHTML = "";
    if(subSumRef >= 29) {
        let deliveryCost = 0.00;
        contentRef.innerHTML = formatNumsToString(deliveryCost) + "€";
        return deliveryCost;
    } else {
        let deliveryCost = 5.00;
        contentRef.innerHTML = formatNumsToString(deliveryCost) + "€";
        return deliveryCost;
    }
}