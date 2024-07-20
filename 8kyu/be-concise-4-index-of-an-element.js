function find(array, element) {
    return array.includes(element) ? array.indexOf(element) :  "Not found"
}

console.log(find(array, 5))
console.log(find(array, 11))