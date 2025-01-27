function initializeNames(name) {
    let result = [];
    let array = name.split(" ");
    for (let i = 0; i < array.length; i++) {
        if (i === 0 || i === array.length - 1) {
            result.push(array[i]);
        } else {
            result.push(array[i][0] + ".");
        }
    }
    return result.join(" ");
}

console.log(initializeNames("Jack Ryan")); // 'Jack Ryan'
console.log(initializeNames("Lois Mary Lane")); // 'Lois M. Lane'
console.log(initializeNames("Dimitri")); // 'Dimitri'
console.log(initializeNames("Alice Betty Catherine Davis")); // 'Alice B. C. Davis'