function getNewNotes(salary,bills){
    let result = (salary - bills.reduce((acc, curr) => acc + curr, 0)) / 5;
    return result > 0 ? Math.floor(result) : 0;
}

console.log(getNewNotes(2000, [500, 160, 400])) // 188);
console.log(getNewNotes(1260, [500, 50, 100])) // 122
console.log(getNewNotes(3600, [1800, 350, 460, 500, 15])) // 95
console.log(getNewNotes(1995, [1500, 19, 44])) // 86
console.log(getNewNotes(10000, [1800, 500, 1200, 655, 150])) // 1139
console.log(getNewNotes(2300, [590, 1500, 45, 655, 150])) // 0
console.log(getNewNotes(5300, [1190, 1010, 1045, 55, 10, 19, 55])) // 383