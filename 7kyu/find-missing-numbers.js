// ❓ DESCRIPTION:
// You will get an array of numbers.
//
// Every preceding number is smaller than the one following it.
//
// Some numbers will be missing, for instance:
//
// [-3,-2,1,5] //missing numbers are: -1,0,2,3,4
// Your task is to return an array of those missing numbers:
//
// [-1,0,2,3,4]
//
// ✅ SOLUTION 1:
function findMissingNumbers(arr) {
    const result = [];
    let num = arr[0];
    for (let i = 0; i < arr.length; i++) {
        while (arr[i] !== num) {
            result.push(num);
            num++;
        }
        num++;
    }
    return result;
}

// ✅ SOLUTION 2:
function findMissingNumbers(arr) {
    const result = [];
    for (let i = arr[0]; i < arr[arr.length - 1]; i++) {
        if (arr.indexOf(i) === -1) {
            result.push(i);
        }
    }
    return result;
}

// 📌 TESTCASE:
console.log(findMissingNumbers([-3,-2,1,4]), [-1,0,2,3]);
console.log(findMissingNumbers([-1,0,1,2,3,4]), []);
console.log(findMissingNumbers([]), []);