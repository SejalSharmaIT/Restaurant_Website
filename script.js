let orderedItems = [];
let totalPrice = 0;

document.addEventListener("DOMContentLoaded", () => {
    const orderButtons = document.querySelectorAll(".order-button");
    const placeOrderButton = document.getElementById("place-order-button");
    const clearOrderButton = document.getElementById("clear-order-button");

    orderButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            const menuItem = event.target.closest(".menu-item");
            const itemName = menuItem.querySelector("h3").innerText;
            const itemPrice = parseFloat(menuItem.querySelector(".price").innerText.replace('₹', ''));

            orderedItems.push({ name: itemName, price: itemPrice });
            totalPrice += itemPrice;

            alert(itemName + " ordered!");

            updateOrderSummary();
        });
    });

    placeOrderButton.addEventListener("click", () => {
        if (orderedItems.length === 0) {
            alert("No items ordered yet!");
            return;
        }
        alert("Your order has been placed successfully!");
        document.getElementById("thank-you-message").innerText = "Thank you for your order!";
    });

    clearOrderButton.addEventListener("click", () => {
        orderedItems = [];
        totalPrice = 0;
        updateOrderSummary();
        document.getElementById("thank-you-message").innerText = "";
        alert("Order cleared!");
    });
});

function updateOrderSummary() {
    const orderItemsContainer = document.getElementById("order-items");
    const totalPriceElement = document.getElementById("total-price");

    orderItemsContainer.innerHTML = "";

    orderedItems.forEach((item) => {
        const itemDiv = document.createElement("div");
        itemDiv.innerText = `${item.name} - ₹${item.price.toFixed(2)}`;
        orderItemsContainer.appendChild(itemDiv);
    });

    totalPriceElement.innerText = totalPrice.toFixed(2);
}
