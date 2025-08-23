// ❓ DESCRIPTION:
// Code as fast as you can!
// You need to make a constructor function with two methods (and only these two methods) to return and increment a
// counter, but the counter should not be directly accessible from outside the function.

// ✅ SOLUTION:
function Counter(initialValue = 0) {
    let _value = initialValue;
    this.check = function () {
        return _value;
    }
    this.increment = function (newValue = 1) {
        _value += newValue;
    }
}

// 📌 TESTCASE:
let myCounter = new Counter();

myCounter.increment();
myCounter.increment();
console.log(myCounter.check() , 2)
