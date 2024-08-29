function sum (numbers) {
    "use strict";
    return numbers.isNaN ? 0 : (numbers.reduce((result, current) => result + current, 0));
};