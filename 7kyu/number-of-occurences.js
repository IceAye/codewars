Object.defineProperty(Array.prototype, 'numberOfOccurrences',{
    value : function numberOfOccurrences(element) {
        return this.reduce((acc, curr) => {
            acc += curr === element ? 1 : 0;
            return acc;
        }, 0)
    }
});

Object.defineProperty(Array.prototype, 'numberOfOccurrences',{
    value : function numberOfOccurrences(element) {
        return this.filter(item => item === element).length;
    }
});

const arr = [0, 1, 2, 2, 3];
console.log(arr.numberOfOccurrences(0)) // 1
console.log(arr.numberOfOccurrences(4)) // 0
console.log(arr.numberOfOccurrences(2)) // 2
console.log(arr.numberOfOccurrences(3)) // 1