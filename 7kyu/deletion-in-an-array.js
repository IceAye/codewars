function deleteValues(array, pred) {
    for (let i = array.length; i >= 0; i--) {
        if (pred(array[i])) {
            array.splice(i, 1);
        }
    }
    return array;
}

function isEven(n) {
    return n % 2 === 0;
}

console.log(deleteValues([1,3,2,4,5,7,6,8,10,9], isEven)) // [1,3,5,7,9]