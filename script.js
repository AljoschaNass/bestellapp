
function init() {
    getFromLocalStorage();
    renderDishes();
}

function renderDishes() {
    let contentRef = document.getElementById("content");
    contentRef.innerHTML = "";

    for (let indexDish = 0; indexDish < dish.length; indexDish++) {
            contentRef.innerHTML += getDishTemplate(indexDish);
    } 
}