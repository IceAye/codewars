Array.prototype.filter = function (func) {
    let array = [];
    for (let i = 0; i < this.length; i++) {
        if (func(this[i])) array.push(this[i]);
    }
    return array;
}

console.log([1,2,3,4,5].filter((num)=>{ return num > 3}));