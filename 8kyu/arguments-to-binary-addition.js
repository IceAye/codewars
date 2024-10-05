function arr2bin(arr) {
    return arr
        .reduce((acc, curr) => (typeof curr === "number" ? acc + curr : acc), 0)
        .toString(2);
}

console.log(arr2bin([1,2,3,4,5]));
console.log(arr2bin([1,10,100,1000]));
console.log(arr2bin([null]));
console.log(arr2bin([true,true,false,15]));
console.log(arr2bin([{},null,42,42]));