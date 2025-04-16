function movie(card, ticket, perc) {
    let i = 1;
    let cost1 = ticket;
    let cost2 = card + ticket * perc;
    while (Math.ceil(cost2) >= cost1) {
        i++;
        cost1 = ticket * i;
        cost2 += ticket * Math.pow(perc, i - 1) * perc;
    }
    return i;
}

console.log(movie(500, 15, 0.9), 43)
console.log(movie(100, 10, 0.95), 24)
console.log(movie(0, 10, 0.95), 2)

