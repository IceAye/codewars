// ❓ DESCRIPTION:
// Oh no, Timmy's Sort doesn't seem to be working? Your task is to fix the sortArray function to sort all numbers in
// ascending order.
//
// ✅ SOLUTION:
let sortArray = function ( value ) {
    return value
        .split("")
        .sort(( c , p ) => c - p)
        .join("");
};

console.log(sortArray("12345"));
console.log(sortArray("54321"));
console.log(sortArray("34251"));