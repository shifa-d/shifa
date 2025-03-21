function addToCart(itemName) {
    let message = document.getElementById("cart-message");
    message.innerHTML = itemName + " has been added to your cart!";
    message.style.display = "block";
    
    setTimeout(() => {
        message.style.display = "none";
    }, 3000);
}