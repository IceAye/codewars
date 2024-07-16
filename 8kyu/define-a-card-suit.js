// ❓ DESCRIPTION:
// You get any card as an argument. Your task is to return the suit of this card (in lowercase).
//
// Our deck (is preloaded):
// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'
//
// ✅ SOLUTION:
function defineSuit(card) {
    return card.at(-1) === '♠' ? 'spades' : card.at(-1) === '♣' ? 'clubs' : card.at(-1) === '♦' ? 'diamonds' : 'hearts'
}

console.log(defineSuit('Q♠'))
console.log(defineSuit('10♦'))
console.log(defineSuit('J♥'))