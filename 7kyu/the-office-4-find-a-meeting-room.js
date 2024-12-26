function meeting(x) {
    let result = x.findIndex((el) => el === "O");
    return result < 0 ? "None available!" : result;
}

console.log(meeting(["X", "O", "X"])); // 1
console.log(meeting(["O", "X", "X", "X", "X"])); // 0
console.log(meeting(["X", "X", "X", "X", "X"])); // 'None available!'
