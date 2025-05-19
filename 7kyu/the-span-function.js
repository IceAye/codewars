function span(arr, predicate) {
    let i = 0;
    while (arr[i] && predicate(arr[i])) i++;
    return [arr.slice(0, i), arr.slice(i)];
}


console.log(span([2, 4, 8, 1,4,8],  isEven = (x) => Math.abs(x) % 2 === 0)) // [[2,4,6],[1,4,8]]
console.log(span([ 13, 17, 19, 11, 21 ],  isOdd = (x) => Math.abs(x) % 2 !== 0)) //