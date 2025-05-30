function checkConcatenatedSum(number, times) {
    let absolute = Math.abs(number)
    let generalized = [...absolute.toString()].reduce((acc, curr) => acc + +curr.repeat(times), 0);
    return generalized === absolute;
}

console.log(checkConcatenatedSum(2997,3),true)
console.log(checkConcatenatedSum(-2997,3),true)