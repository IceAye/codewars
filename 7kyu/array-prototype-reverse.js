Array.prototype.reverse = function() {
    let i = this.length - 2;
    while (i >= 0) {
        this.push(this[i]);
        i--;
    }
    let n = Math.floor(this.length / 2);
    while (n > 0) {
        this.shift();
        n--;
    }
    return this;
};

Array.prototype.reverse = function() {
    let i = 0;
    let j = this.length - 1;
    while (i < Math.floor(this.length / 2)) {
        [this[i], this[j]] = [this[j], this[i]];
        i++;
        j--;
    }
    return this;
};

console.log([1, 2, 3, 4].reverse(), [4,3,2,1]);
console.log(["a", "b", "c"].reverse(), ["c", "b", "a"]);
console.log([].reverse(), []);