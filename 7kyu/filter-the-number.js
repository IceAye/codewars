//SOLUTION 1:
let filterString = function(value) {
    return +value.replace(/[^\d]/gi, "");
}

console.log(filterString("123"));
console.log(filterString("a1b2c3"));
console.log(filterString("aa1bb2cc3dd"));