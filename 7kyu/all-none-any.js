// ❓ DESCRIPTION:
// As a part of this Kata, you need to create three functions that one needs to be able to call upon an array:
// all
//
// This function returns true only if the predicate supplied returns true for all the items in the array [1, 2, 3].all(isGreaterThanZero) => true [-1, 0, 2].all(isGreaterThanZero) => false
//
// none
//
// This function returns true only if the predicate supplied returns false for all the items in the array [-1, 2, 3].none(isLessThanZero) => false [-1, -2, -3].none(isGreaterThanZero) => true
//
// any
//
// This function returns true if at least one of the items in the array returns true for the predicate supplied [-1, 2, 3].any(isGreaterThanZero) => true [-1, -2, -3].any(isGreaterThanZero) => false
//
// You do not need to worry about the data supplied, it will be an array at all times.
//
// ✅ SOLUTION:
Array.prototype.all = function (p) {
    for (const item of this) {
        if (p(item) === false) return false;
    }
    return true;
};

Array.prototype.none = function (p) {
    for (const item of this) {
        if (p(item)) return false;
    }
    return true;
};

Array.prototype.any = function (p) {
    for (const item of this) {
        if (p(item)) return true;
    }
    return false;
};

// ✅ SOLUTION 2:
Array.prototype.all = function (p) {
    return this.filter(item => p(item)).length === this.length;
};

Array.prototype.none = function (p) {
    return this.filter(item => !p(item)).length === this.length;
};

Array.prototype.any = function (p) {
    return this.filter(item => p(item)).length > 0;
};

// 📌 TESTCASE:
function isGreaterThanZero(num) {
    return num > 0;
}

function isLessThanZero(num) {
    return num < 0;
}

console.log([1, 2, 3].all(isGreaterThanZero), "All are greater than zero");
console.log([-1, 0, 2].all(isGreaterThanZero), "One is less than zero");

console.log([-1, 2, 3].none(isLessThanZero), "One is less than zero");
console.log([-1, -2, -3].none(isGreaterThanZero), "None are greater than zero");

console.log([-1, 2, 3].any(isGreaterThanZero), "Two are greater than zero");
console.log([-1, -2, -3].any(isGreaterThanZero), "None are greater than zero");