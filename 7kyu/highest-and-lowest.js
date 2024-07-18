function highAndLow(numbers){
    let num = numbers.split(' ').map((item) => +item);
    let maxNum = Math.max.apply(null, num);
    let minNum = Math.min.apply(null, num);
    return  String(`${maxNum}` + " " + `${minNum}`);
}