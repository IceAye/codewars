function fuelPrice(litres, pricePerLitre) {
    for (let i = 2; i <= 10; i += 2) {
        if (litres >= i) pricePerLitre -= 0.05
    }
    return +(pricePerLitre * litres).toFixed(2)
}

console.log(fuelPrice(5, 1.23));
console.log(fuelPrice(8, 2.5));
console.log(fuelPrice(5, 5.6));
