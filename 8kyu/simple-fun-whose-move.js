// ❓ DESCRIPTION:
// Two players - "black" and "white" are playing a game. The game consists of several rounds. If a player wins in a round, he is to move again during the next round. If a player loses a round, it's the other player who moves on the next round. Given whose turn it was on the previous round and whether he won, determine whose turn it is on the next round.
//
// ✅ SOLUTION:
function whoseMove(lastPlayer, win) {
    return win ? lastPlayer : lastPlayer === "white" ? "black" : "white"
}

console.log(whoseMove("black",false));
console.log(whoseMove("white",true));
console.log(whoseMove("white",false));

