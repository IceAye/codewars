// ❓ DESCRIPTION:
// A 6-sided die is rolled a number of times and the results are plotted as a character-based histogram.
//
// Example:
//
// 6|##### 5
// 5|
// 4|# 1
// 3|########## 10
// 2|### 3
// 1|####### 7
// Task
// You will be passed the dice value frequencies, and your task is to write the code to return a string representing a histogram, so that when it is printed it has the same format as the example.

// ✅ SOLUTION:
function histogram(results) {
    let histogram = '';
    let i = results.length - 1;
    while (i >= 0){
        const ifZero = results[i] === 0 ? '' : ' ' + results[i];
        const string = `${i + 1}|${'#'.repeat(results[i])}${ifZero}\n`;
        histogram += string;
        i--;
    }
    return histogram;
}

// 📌 TESTCASE:
const expected = `6|##### 5
5|
4|# 1
3|########## 10
2|### 3
1|####### 7
`;
const hist = histogram([7, 3, 10, 1, 0, 5]);
console.log(hist, expected);
