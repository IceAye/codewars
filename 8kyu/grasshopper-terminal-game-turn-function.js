// ❓ DESCRIPTION:
// You are creating a text-based terminal version of your favorite board game. In the board game, each turn has six steps that must happen in this order: roll the dice, move, combat, get coins, buy more health, and print status.
//
// ✅ SOLUTION:
const doTurn = () => {
    rollDice()
    move()
    combat()
    getCoins()
    buyHealth()
    printStatus()
}