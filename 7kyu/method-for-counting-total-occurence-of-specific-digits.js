// ❓ DESCRIPTION:
// We need a method in the List Class that may count specific digits from a given list of integers. This marked digits will be given in a second list. The method .count_spec_digits()/.countSpecDigits() will accept two arguments, a list of an uncertain amount of integers integers_lists/integersLists (and of an uncertain amount of digits, too) and a second list, digits_list/digitsList that has the specific digits to count which length cannot be be longer than 10 (It's obvious, we've got ten digits). The method will output a list of tuples, each tuple having two elements, the first one will be a digit to count, and second one, its corresponding total frequency in all the integers of the first list. This list of tuples should be ordered with the same order that the digits have in digitsList
//
// ✅ SOLUTION 1:
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

// ✅ SOLUTION 2:
function List(){
    this.countSpecDigits = function(integersList, digitsList) {
        return digitsList.map(digit => [digit, integersList.toString().split(digit).length - 1]);
    }
}

// 📌 TESTCASE:
let l = new List();

console.log(l.countSpecDigits([1, 1, 2, 3, 1, 2, 3, 4], [1, 3]),[[1, 3], [3, 2]]);
console.log(l.countSpecDigits([-18, -31, 81, -19, 111, -888], [1, 8, 4]), [[1, 7], [8, 5], [4, 0]]);
console.log(l.countSpecDigits([-77, -65, 56, -79, 6666, 222], [1, 8, 4]),  [[1, 0], [8, 0], [4, 0]]);
console.log(l.countSpecDigits([-77, -65, 56, -79, 6666, 222], []), []);
console.log(l.countSpecDigits([], [1, 8, 4]), [[1, 0], [8, 0], [4, 0]]);