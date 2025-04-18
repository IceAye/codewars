// ❓ DESCRIPTION:
// Chapter 1: Promises Made and Broken
// Your company has purchased a new ordering system and hired Bob the Highly Paid Consultant to develop a front end. However, after continuous delays and missed deliverables, his contract has now come to an end. Bob vanishes like a ghost into the fog, leaving you to see if you can salvage the pieces of his work.
//
// One thing is clear: Bob has left a chain of broken promises in his wake.
//
// Can you help to fix things?
//
// In the sample test case (submitOrder(12345)), "Your order was placed successfully" should be logged to the console. Hit "Attempt" to see if you pass the kata.
//
// Some notes:
//
// You can assume that the functions Bob is calling actually exist and take the given parameters in the given order.
// User "12345" is a valid user for testing
// Any provided function whose name ends in Async returns a Promise.
// Any provided function whose name does not end in Async is synchronous, i.e. calculateShipping().
//
// ✅ SOLUTION:

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