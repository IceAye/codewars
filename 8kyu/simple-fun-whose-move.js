function whoseMove(lastPlayer, win) {
    return win ? lastPlayer : lastPlayer === "white" ? "black" : "white"
}

console.log(whoseMove("black",false));
console.log(whoseMove("white",true));
console.log(whoseMove("white",false));

