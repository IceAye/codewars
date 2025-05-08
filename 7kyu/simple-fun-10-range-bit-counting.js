function rangeBitCount(a, b) {
    let result = 0;

    function countOnes(number) {
        return number.toString(2).replace(/0/g, "").length;
    }

    for (let i = a; i <= b; i++) {
        result += countOnes(i);
    }

    return result;
}

console.log(rangeBitCount(2,7) , 11)
console.log(rangeBitCount(0,1) , 1)
console.log(rangeBitCount(4,4) , 1)
