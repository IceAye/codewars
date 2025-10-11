// ❓ DESCRIPTION:
// You are given a string of words and numbers. Extract the expression including:
//
// the operator: either addition ("gains") or subtraction ("loses")
// the two numbers that we are operating on
// Return the result of the calculation.
//
// Notes:
// "loses" and "gains" are the only two words describing operators
// No fruit debts nor bitten apples = The numbers are integers and no negatives

// ✅ SOLUTION:
function calculate(string) {
    const operators = string.match(/(\d+)|(loses)|(gains)/g);
    return operators[1] === 'loses' ? +operators[0] - +operators[2] : +operators[0] + +operators[2];
}

// 📌 TESTCASE:
console.log(calculate("Panda has 48 apples and loses 4"), 44);
console.log(calculate("Jerry has 34 apples and gains 6"), 40);