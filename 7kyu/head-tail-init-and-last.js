const head = (array) => {
    return array[0];
};

const last = (array) => {
    return array.at(-1);
};

const tail = (array) => {
    return array.slice(1);
};

const init = (array) => {
    return array.slice(0, -1);
};

console.log(head([5, 1])); // 5
console.log(tail([1])); // []
console.log(init([1, 5, 7, 9])); // [1,5,7]
console.log(last([7, 2])); // 2