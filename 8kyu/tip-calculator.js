function calculateTip(amount, rating) {
    rating = rating.toLowerCase()

    let tips = {
        terrible: 0,
        poor: 0.05,
        good: 0.1,
        great: 0.15,
        excellent: 0.2,
    };

    return rating in tips ? Math.ceil(amount * tips[rating]) : "Rating not recognised";
}

console.log(calculateTip(20, "Excellent"));
console.log(calculateTip(26.95, "good"));
console.log(calculateTip(50, "poor"));
console.log(calculateTip(20, "terrible"));
console.log(calculateTip(10, "fuu"));