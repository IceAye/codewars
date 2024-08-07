let sortArray = function (value) {
    return value
        .split("")
        .sort((c, p) => c - p)
        .join("");
};

console.log(sortArray("12345"));
console.log(sortArray("54321"));
console.log(sortArray("34251"));