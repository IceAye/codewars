function reverseList(arr) {
    return arr.reverse();
}

function reverseList(arr) {
    let array = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        array.push(arr[i]);
    }
    return array;
}