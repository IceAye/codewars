const abc = "abcdefghijklmnopqrstuvwxyz"
// SOLUTION 1:
function solve(arr) {
    let result = [];
    for (const word of arr) {
        let count = 0;
        for (let i = 0; i < word.length; i++) {
            if (word.at(i).toLowerCase() === abc.at(i)) count++
        }
        result.push(count)
    }
    return result;
}

// SOLUTION 2:
function solve(arr) {
    return arr.map((item) =>
        [...item.toLowerCase()].reduce(
            (acc, curr, index) => acc + (curr.charCodeAt() == index + 97), 0
        ),
    );
}


console.log(solve(["abode", "ABc", "xyzD"]));
console.log(solve(["abide","ABc","xyz"]));
console.log(solve(["IAMDEFANDJKL","thedefgh","xyzDEFghijabc"]));
