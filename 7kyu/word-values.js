function wordValue(a) {
    const abc = " abcdefghijklmnopqrstuvwxyz";
    return a.map( (item, index) => [...item].reduce((acc, curr) => acc + +abc.indexOf(curr), 0) * (index + 1))
}

console.log(wordValue(["codewars", "abc", "xyz"])); // [88,12,225]
console.log(wordValue(["abc abc", "abc abc", "abc", "abc"])); // [12,24,18,24]