// ❓ DESCRIPTION:
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
//
// 📌 Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.
//
// ✅ SOLUTION:
function highAndLow(numbers){
    let num = numbers.split(' ').map((item) => +item);
    let maxNum = Math.max.apply(null, num);
    let minNum = Math.min.apply(null, num);
    return  String(`${maxNum}` + " " + `${minNum}`);
}

console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"))
console.log(highAndLow("10 2 -1 -20"))