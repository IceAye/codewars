function average(scores) {
    return Math.round(scores.reduce((acc, curr) => acc + curr, 0) / scores.length);
}


console.log(average([49,3,5,300,7])) // 73
console.log(average([90,98,89,100,100,86,94])) // 94