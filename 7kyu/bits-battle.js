// ❓ DESCRIPTION:
// The odd and even numbers are fighting against each other!
// You are given a list of positive integers. The odd numbers from the list will fight using their 1 bits from their binary representation, while the even numbers will fight using their 0 bits. If present in the list, number 0 will be neutral, hence not fight for either side.
// You should return:
// odds win if number of 1s from odd numbers is larger than 0s from even numbers
// evens win if number of 1s from odd numbers is smaller than 0s from even numbers
// tie if equal, including if list is empty
// Please note that any prefix that might appear in the binary representation, e.g. 0b, should not be counted towards the battle.

// ✅ SOLUTION:
function bitsBattle(numbers) {
    let oddOnesSum = 0;
    let evenZeroesSum = 0;

    for (const number of numbers) {
        if (number === 0) continue;
        const binaryRepresentation = number.toString(2);

        if (number % 2 === 0) {
            evenZeroesSum += binaryRepresentation.match(/0/g).length;
        } else {
            oddOnesSum += binaryRepresentation.match(/1/g).length;
        }
    }
    return oddOnesSum === evenZeroesSum
           ? 'tie'
           : oddOnesSum > evenZeroesSum
             ? 'odds win'
             : 'evens win';
}

// 📌 TESTCASE:
console.log(bitsBattle([5, 3, 14], 'odds win'));
console.log(bitsBattle([3, 8, 22, 15, 78], 'evens win'));
console.log(bitsBattle([], 'tie'));
console.log(bitsBattle([1, 13, 16], 'tie'));
console.log(bitsBattle([0], 'tie'));
console.log(bitsBattle([0, 1, 2], 'tie'));
