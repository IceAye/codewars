// SOLUTION 1:
function dataReverse(data) {
    return data.length === 0
        ? 0
        : Array.from(
            data
                .join("")
                .match(/.{1,8}/g)
                .reverse()
                .join(""),
            Number,
        );
}

// SOLUTION 2:
function dataReverse(data) {
    let result = [];
    while (data.length > 0) {
        result.push(...data.splice(-8));
    }
    return result;
}

console.log(
    dataReverse([
        1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1,
        0, 1, 0, 1, 0, 1, 0,
    ]),
);
