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