function isFlush(cards) {
    return cards.every((card) => cards[0].at(-1) === card.at(-1));
}

console.log(isFlush(["AS", "3S", "9S", "KS", "4S"])); //  true
console.log(isFlush(["AD", "4S", "7H", "KC", "5S"])); // false