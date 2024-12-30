// DESCRIPTION:
// We need a function that can transform a number (integer) into a string.
// What ways of achieving this do you know?
//
// SOLUTION 1:
function numberToString(num) {
    return num = String(num);
}

// SOLUTION 2:
function numberToString(num) {
    return '' + num;
}

// SOLUTION 3:
function numberToString(num) {
    return `${num}`;
}

// SOLUTION 4:
function numberToString(num) {
    return num.toString();
}