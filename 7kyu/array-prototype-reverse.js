// ❓ DESCRIPTION:
// The Array's reverse() method has gone missing! Re-write it, quick-sharp!
// When this method is called, it reverses the order of the items in the original array. Then then it returns that same, original array. No new arrays should need to be created to pass this kata.
// Here's an example:
//
// var input = [1, 2, 3, 4];
// input.reverse(); // == [4, 3, 2, 1]  // returned by .reverse()
// input;           // == [4, 3, 2, 1]  // items reordered in the original array
//
// ✅ SOLUTION 1:
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

// ✅ SOLUTION 2:
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

// 📌 TESTCASE:
console.log([1, 2, 3, 4].reverse(), [4,3,2,1]);
console.log(["a", "b", "c"].reverse(), ["c", "b", "a"]);
console.log([].reverse(), []);