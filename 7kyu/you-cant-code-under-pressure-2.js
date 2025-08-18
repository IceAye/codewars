function Counter(initialValue = 0) {
    let _value = initialValue;
    this.check = function() {
        return _value;
    }
    this.increment = function(newValue = 1) {
        _value += newValue;
    }
}

let myCounter = new Counter();

myCounter.increment();
myCounter.increment();
console.log(myCounter.check(), 2)
