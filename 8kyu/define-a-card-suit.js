function defineSuit(card) {
    return card.at(-1) === '♠' ? 'spades' : card.at(-1) === '♣' ? 'clubs' : card.at(-1) === '♦' ? 'diamonds' : 'hearts'
}

console.log(defineSuit('Q♠'))
console.log(defineSuit('10♦'))
console.log(defineSuit('J♥'))