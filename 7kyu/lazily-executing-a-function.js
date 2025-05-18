function makeLazy (...args) {
    return () => args[0](...args.slice(1));
}
// or
function makeLazy (func, ...restArgs) {
    return () => func(...restArgs);
}


function add(a, b) { return a + b; }
function double(n) { return n * 2; }
function superAdd(...args) { return args.reduce((sum, x) => sum + x, 0); }

console.log(makeLazy(add, 2, 3))
console.log(makeLazy(double, 5))
console.log(makeLazy(superAdd, 1, 2, 3, 4, 5))