var Calculator = {
    average: function (...args) {
        return [...args].reduce((acc, curr) => acc + curr, 0) / args.length || 0;
    },
};

console.log(Calculator.average(3,4,5)) // 4
console.log(Calculator.average(3,4,5,6,7,8,9,8,7,6,5,4,3)) // 5.769230769230769
console.log(Calculator.average()) // 0