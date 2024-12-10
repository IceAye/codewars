function elapsedSeconds(startDate, endDate){
    return (endDate - startDate) / 1000;
}

const start = new Date(2013, 1, 1, 0, 0, 1);
const end = new Date(2013, 1, 1, 0, 0, 2);
const end2 = new Date(2013, 1, 1, 0, 0, 20);
const end3 = new Date(2013, 1, 1, 0, 1, 20);

console.log(elapsedSeconds(start, end)) // 1
console.log(elapsedSeconds(end, end2)) // 18
console.log(elapsedSeconds(start, end2)) // 19
console.log(elapsedSeconds(start, end3)) // 79
console.log(elapsedSeconds(end, end3)) // 78