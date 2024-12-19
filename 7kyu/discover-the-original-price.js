function discoverOriginalPrice(discountedPrice, salePercentage) {
    return +(discountedPrice / (100 - salePercentage) * 100).toFixed(2)
}

console.log(discoverOriginalPrice(75, 25)); // 100
console.log(discoverOriginalPrice(25, 75)); // 100
console.log(discoverOriginalPrice(75.75, 25)); // 101