function getDishTemplate(indexDish) {
    return `
            <div class="dishes">
                <div class="dishes_data">
                    <h3 class="dishes_name">${dishes[indexDish].name}</h3>
                    <p class="dishes_ndescription">${dishes[indexDish].description}</p>
                    <p class="dishes_price">${dishes[indexDish].price}€</p>
                </div>
                <button id="add_dishes" class="add_dishes" onclick="addOneDish(${indexDish})">+</button>
            </div>
    `;
}

function getBasketTemplate(indexDish) {
    return `
            <section class="chosen_section">
                <h3>${dishes[indexDish].name}</h3>
                <div class="edit_section">
                    <button onclick="deleteOneDish(${indexDish})">-</button>
                    <p>${dishes[indexDish].quantity}x</p>
                    <button onclick="addOneDish(${indexDish})">+</button>
                    <p>${dishes[indexDish].amout}€</p>
                    <button onclick="deleteAllDishes(${indexDish})">T</button>
                </div>
            </section>
    `;
}