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

console.log(
    dataReverse([
        1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1,
        0, 1, 0, 1, 0, 1, 0,
    ]),
);
