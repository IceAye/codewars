const target = function (n) {
    return n % 2 === 0 ? "Even" : "Odd";
};

const handler = {
    get(target, prop) {
        return target(prop);
    },
};

const evenOrOdd = new Proxy(target, handler);

console.log(evenOrOdd[4]);
console.log(evenOrOdd[11]);
console.log(evenOrOdd(4));
console.log(evenOrOdd(7));
