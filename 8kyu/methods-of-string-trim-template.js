function fiveLine(s){
    let string = s.trim()
    let result = string;
    let i = 2
    while (i < 6) {
        result += "\n" + string.repeat(i);
        i++;
    }
    return result;
}

console.log(fiveLine("  a"));
console.log(fiveLine("\txy \n"));
console.log(fiveLine("           Ok               "));
