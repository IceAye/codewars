// ❓ DESCRIPTION:
// Brief
// Sometimes we need information about the list/arrays we're dealing with. You'll have to write such a function in this kata. Your function must provide the following informations:
//
// Length of the array
// Number of integer items in the array
// Number of float items in the array
// Number of string character items in the array
// Number of whitespace items in the array
// The informations will be supplied in arrays that are items of another array. Like below:
//
// Output array = [[array length],[no of integer items],[no of float items],[no of string chars items],[no of whitespace items]]
//
// Added Difficulty
// If any item count in the array is zero, you'll have to replace it with a None/nil/null value (according to the language). And of course, if the array is empty then return 'Nothing in the array!. For the sake of simplicity, let's just suppose that there are no nested structures.

// ✅ SOLUTION:
function arrayInfo(arr){
    const length = arr.length;
    let integersCount = null;
    let floatsCount = null;
    let stringsCount = null;
    let whitespacesCount = null;
    for (const item of arr) {
        if (Number.isInteger(item)) integersCount++;
        else if (typeof item === 'string' && /[a-z]/gi.test(item)) stringsCount++;
        else if (item === ' ') whitespacesCount++;
        else if (typeof item === 'number') floatsCount++;
    }
    return length === 0 ? 'Nothing in the array!' : [[length], [integersCount], [floatsCount], [stringsCount], [whitespacesCount]]
}

// 📌 TESTCASE:
console.log(arrayInfo([1,2,3.33,4,5.01,'bass','kick',' ']),[[8],[3],[2],[2],[1]]);
console.log(arrayInfo([0.001,2,' ']),[[3],[1],[1],[null],[1]]);
console.log(arrayInfo([]),'Nothing in the array!');
console.log(arrayInfo([' ']),[[1],[null],[null],[null],[1]]);
console.log(arrayInfo([{}]),[[1],[null],[null],[null],[null]]);
console.log(arrayInfo([' ',' ']),[[2],[null],[null],[null],[2]]);
console.log(arrayInfo(['jazz']),[[1],[null],[null],[1],[null]]);
console.log(arrayInfo([4]),[[1],[1],[null],[null],[null]]);
console.log(arrayInfo([3.1416]),[[1],[null],[1],[null],[null]]);
console.log(arrayInfo([4]),[[1],[1],[null],[null],[null]]);
console.log(arrayInfo([11,22,33.33,44.44,'hasan','ahmad']),[[6],[2],[2],[2],[null]]);
console.log(arrayInfo(['a','b','c','d',' ']),[[5],[null],[null],[4],[1]]);
console.log(arrayInfo([1,2,3,4,5,6,7,8,9]),[[9],[9],[null],[null],[null]]);
console.log(arrayInfo([1,2.23,'string',' ']),[[4],[1],[1],[1],[1]]);
console.log(arrayInfo([' ',' ']),[[2],[null],[null],[null],[2]]);