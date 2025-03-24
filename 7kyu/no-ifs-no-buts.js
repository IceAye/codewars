function noIfsNoButs(a, b) {
    switch (a > b) {
        case true:
            return `${a} is greater than ${b}`;
        case false:
            switch (a - b) {
                case 0:
                    return `${a} is equal to ${b}`;
                default:
                    return `${a} is smaller than ${b}`;
            }
    }
}

function noIfsNoButs(a, b) {
    switch (Math.sign(a - b)) {
        case 1:
            return `${a} is greater than ${b}`;
        case -1:
            return `${a} is smaller than ${b}`;
        default:
            return `${a} is equal to ${b}`;
    }
}

console.log(noIfsNoButs(45, 51)) // "45 is smaller than 51"
console.log(noIfsNoButs(1, 2)) // "1 is smaller than 2"
console.log(noIfsNoButs(-3, 2)) // "-3 is smaller than 2"
console.log(noIfsNoButs(1, 1)) // "1 is equal to 1"
console.log(noIfsNoButs(100, 100)) // "100 is equal to 100"
console.log(noIfsNoButs(100, 80)) // "100 is greater than 80"
console.log(noIfsNoButs(20, 19)) // "20 is greater than 19"