// ❓ DESCRIPTION:
// Every Friday and Saturday night, farmer counts sheep coming back to his farm (sheep returned on Friday stay and don't leave).
// Sheep return in groups both of the days -> You will be given two arrays with these numbers (one for Friday and one for Saturday night). Array entries are integers, equal zero or higher - in case a given array is empty, farmer did not count the sheep or got sick (we treat this as no sheep returned that night).
// Farmer knows how many sheep he has in total (third parameter). You need to calculate the amount of sheep lost (not returned to the farm) after final sheep count on Saturday.
// Good luck! :-)
//
// ✅ SOLUTION 1:
function lostSheep(friday, saturday, total) {
    function sum(array) {
        return array.reduce((acc, curr) => acc + curr, 0);
    }
    return total - sum(friday) - sum(saturday);
}

// ✅ SOLUTION 2:
function lostSheep(friday, saturday, total) {
    return [...friday, ...saturday].reduce((acc, curr) => acc - curr, total);
}

// 📌 TESTCASE:
console.log(lostSheep([1,2],[3,4],15))  // 5
console.log(lostSheep([3,1,2],[4,5],21))  // 6
console.log(lostSheep([5,1,4],[5,4],29))  // 10
console.log(lostSheep([11,23,3,4,15],[7,14,9,21,15],300))  // 178
console.log(lostSheep([2,7,13,17],[23,56,44,12,1,2,1,],255))  // 77
console.log(lostSheep([2,5,8],[11,23,3,4,15,112,12,4],355))  // 156
console.log(lostSheep([1,1,1,2,1,2],[2,1,2,1,2,1],30))  // 13
console.log(lostSheep([5,10,15],[11,23,3,4,15],89))  // 3
console.log(lostSheep([3,6,9,12],[3,2,1,2,3,1],44))  // 2
console.log(lostSheep([],[],15))  // 15
