// ❓ DESCRIPTION:
// Several people are standing in a row divided into two teams.
// The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.
// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.
//
// ✅ SOLUTION:
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
