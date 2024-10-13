//SOLUTION 1:
let filterString = function(value) {
    return +value.replace(/[^\d]/gi, "");
}

// SOLUTION 2:
let filterString = function(value) {
    return +value.match(/\d/g).join("");
}

// SOLUTION 3:
let filterString = function(value) {
    return +[...value].filter(item => Number.isInteger(+item)).join("");
}

console.log(filterString("123"));
console.log(filterString("a1b2c3"));
console.log(filterString("aa1bb2cc3dd"));