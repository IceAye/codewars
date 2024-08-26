function rowWeights(array) {
    let teamOneWeight = 0;
    let teamTwoWeight = 0;

    for (let i = 0; i < array.length; i++) {
        i % 2 === 0 ? (teamOneWeight += array[i]) : (teamTwoWeight += array[i]);
    }
    return [teamOneWeight, teamTwoWeight];
}

console.log(rowWeights([100, 51, 50, 100]));
console.log(rowWeights([39, 84, 74, 18, 59, 72, 35, 61]));
console.log(rowWeights([0]));
