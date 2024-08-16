function guessBlue(blueStart, redStart, bluePulled, redPulled) {
    let remainedBlue = blueStart - bluePulled;
    return remainedBlue / (remainedBlue + (redStart - redPulled));
}

console.log(guessBlue(5, 5, 2, 3));
console.log(guessBlue(5, 7, 4, 3));
console.log(guessBlue(12, 18, 4, 6));