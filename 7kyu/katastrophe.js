function strongEnough(earthquake, age) {
    let earthquakePower = earthquake.reduce((acc, curr) => acc * curr.reduce((acc, curr) => acc + curr, 0), 1);

    let strength = 1000;
    for (let i = 0; i < age; i++) {
        strength *= 0.99;
    }

    return earthquakePower > strength ? "Needs Reinforcement!" : "Safe!";
}

console.log(strongEnough([[2,3,1],[3,1,1],[1,1,2]], 2), "Safe!")
console.log(strongEnough([[5,8,7],[3,3,1],[4,1,2]], 2), "Safe!")
console.log(strongEnough([[5,8,7],[3,3,1],[4,1,2]], 3), "Needs Reinforcement!")



