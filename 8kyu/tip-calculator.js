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