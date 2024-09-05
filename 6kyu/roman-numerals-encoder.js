// ❓ DESCRIPTION:
// Create a function taking a positive integer between 1 and 3999 (both included) as its parameter and returning a string containing the Roman Numeral representation of that integer.
//
// Modern Roman numerals are written by expressing each digit separately starting with the leftmost digit and skipping any digit with a value of zero. There cannot be more than 3 identical symbols in a row.
//
// ✅ SOLUTION:
function solution(number) {
    let x = {
        0: "M",
        1: "C",
        2: "X",
        3: "I",
    };

    let y = {
        0: "",
        1: "D",
        2: "L",
        3: "V",
    };

    let array = Array.from(String(number).padStart(4, "0"), Number);

    let digit = "";

    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            digit += "";
        } else if (array[i] <= 3) {
            while (array[i] > 0) {
                digit += x[i];
                array[i]--;
            }
        } else if (array[i] === 4) {
            digit += x[i] + y[i];
        } else if (array[i] === 5) {
            digit += y[i];
        } else if (array[i] <= 8) {
            digit += y[i] + x[i];
            while (array[i] > 6) {
                digit += x[i];
                array[i]--;
            }
        } else if (array[i] === 9) {
            digit += x[i] + x[i - 1];
        }
    }
    return digit;
}

console.log(solution(1001));
console.log(solution(1990));
console.log(solution(2008));
console.log(solution(567));
console.log(solution(1));
