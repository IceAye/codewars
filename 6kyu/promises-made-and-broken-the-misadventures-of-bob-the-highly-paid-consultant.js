function submitOrder(user) {
    var shoppingCart, zipCode, shippingRate, orderSuccessful;

    OrderAPI.getShoppingCartAsync(user).then(function(cart) {
        shoppingCart = cart;
        return CustomerAPI.getProfileAsync(user)
    })
            .then(function(profile) {
                zipCode = profile.zipCode;
            })
            .then(function() {
                shippingRate = calculateShipping(shoppingCart, zipCode);
                return OrderAPI.placeOrderAsync(shoppingCart, shippingRate)
            })
            .then(function(success) {
                orderSuccessful = success;
            });

    console.log(`Your order ${orderSuccessful? "was" : "was NOT"} placed successfully`);
}