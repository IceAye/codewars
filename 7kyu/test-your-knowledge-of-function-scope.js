function add(number) {
    return (sum) => sum + number;
}

console.log(add(2)(5), 7)
console.log(add(14)(25), 39)