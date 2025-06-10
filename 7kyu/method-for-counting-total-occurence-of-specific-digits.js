function List(){
    this.countSpecDigits = function(integersList, digitsList) {
        const freqMap = new Map();
        for (const integer of integersList) {
            const digits = Array.from((Math.abs(integer)).toString(), Number);
            for (const digit of digits) {
                freqMap.set(digit, freqMap.get(digit) + 1 || 1);
            }
        }

        const result = [];
        for (const digit of digitsList) {
            result.push([digit, freqMap.get(digit) || 0])
        }

        return result;
    }
}

let l = new List();

console.log(l.countSpecDigits([1, 1, 2, 3, 1, 2, 3, 4], [1, 3]),[[1, 3], [3, 2]]);
console.log(l.countSpecDigits([-18, -31, 81, -19, 111, -888], [1, 8, 4]), [[1, 7], [8, 5], [4, 0]]);
console.log(l.countSpecDigits([-77, -65, 56, -79, 6666, 222], [1, 8, 4]),  [[1, 0], [8, 0], [4, 0]]);
console.log(l.countSpecDigits([-77, -65, 56, -79, 6666, 222], []), []);
console.log(l.countSpecDigits([], [1, 8, 4]), [[1, 0], [8, 0], [4, 0]]);