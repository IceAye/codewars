function scoreboard(string) {
    const score = {
        'one': 1,
        'two': 2,
        'three': 3,
        'four': 4,
        'five': 5,
        'six': 6,
        'seven': 7,
        'eight': 8,
        'nine': 9,
        'nil': 0
    }
    return string.split(" ").reduce((acc, curr) => {
        if (score[curr] !== undefined ) acc.push(score[curr])
        return acc;
    }, []);
}


console.log(scoreboard("The score is four nil")) // [4,0]
console.log(scoreboard("new score: two three")) // [2,3]
console.log(scoreboard("two two")) // [2,2]
console.log(scoreboard("Arsenal just conceded another goal, two nil")) // [2,0]
