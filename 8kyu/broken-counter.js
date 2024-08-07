// ❓ DESCRIPTION:
// Our counter prototype is broken. Can you spot, what's wrong here?
//
// ✅ SOLUTION:
function Counter() {
    return (this.value = 0);
}

Counter.prototype.increase = function () {
    return this.value++;
};

Counter.prototype.getValue = function () {
    return this.value;
};

Counter.prototype.reset = function () {
    this.value = 0;
};

let counter = new Counter();

console.log(counter.getValue());

counter.increase();
console.log(counter.getValue());

counter.reset();
console.log(counter.getValue());