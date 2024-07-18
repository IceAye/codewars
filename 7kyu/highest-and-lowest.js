function highAndLow(numbers){
    let num = numbers.split(' ').map((item) => +item);
    let maxNum = Math.max.apply(null, num);
    let minNum = Math.min.apply(null, num);
    return  String(`${maxNum}` + " " + `${minNum}`);
}

console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"))
console.log(highAndLow("10 2 -1 -20"))