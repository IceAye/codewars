const paintLetterboxes = function (start, end) {
    let result = new Array(10).fill(0);
    for (let i = start; i <= end; i++) {
        let digits = Array.from(i.toString(), Number);

        for (const digit of digits) {
            result[digit] += 1;
        }
    }
    return result;
};


console.log(paintLetterboxes(125, 132), [1,9,6,3,0,1,1,1,1,1]);
