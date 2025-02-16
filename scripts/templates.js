function getDishTemplate(indexDish) {
    return `
            <div class="dishes">
                <div class="dishes_data">
                    <h3 class="dishes_name">${dishes[indexDish].name}</h3>
                    <p class="dishes_ndescription">${dishes[indexDish].description}</p>
                    <p class="dishes_price">${dishes[indexDish].price}€</p>
                </div>
                <button id="add_dishes" class="btn_dish" onclick="addOneDish(${indexDish})">
                    <img src="./assets/icons/plus_icon.png" alt="trash">
                </button>
            </div>
    `;
}

function getBasketTemplate(indexDish) {
    return `
            <section class="chosen_section">
                <h3>${dishes[indexDish].name}</h3>
                <div class="edit_section">
                    <div class="dish_up_and_down">
                        <button class="btn_basket" onclick="deleteOneDish(${indexDish})">
                            <img src="./assets/icons/minus_icon.png" alt="trash">
                        </button>
                        <p>${dishes[indexDish].quantity}x</p>
                        <button class="btn_basket" onclick="addOneDish(${indexDish})">
                            <img src="./assets/icons/plus_icon.png" alt="trash">
                        </button>
                    </div>
                    <p>${dishes[indexDish].amout}€</p>
                    <button class="btn_basket" onclick="deleteAllDishes(${indexDish})">
                        <img src="./assets/icons/trash_icon.png" alt="trash">
                    </button>
                </div>
            </section>
    `;
}