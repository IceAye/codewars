// ❓ DESCRIPTION:
// What we want to implement is Array.prototype.filter() function, just like the existing Array.prototype.filter(). Another similar function is _.filter() in underscore.js and lodash.js.
//
// ✅ SOLUTION:
Array.prototype.filter = function (func) {
    let array = [];
    for (let i = 0; i < this.length; i++) {
        if (func(this[i])) array.push(this[i]);
    }
    return array;
}

// 📌 TESTCASE:
console.log([1,2,3,4,5].filter((num)=>{ return num > 3}));