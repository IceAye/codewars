// ❓ DESCRIPTION:
// Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.
//
// ✅ SOLUTION 1:
function take(arr, n) {
    return arr.filter((item, index) => index < n)
}

// ✅ SOLUTION 2:
function take(arr, n) {
    return arr.slice(0, n);
}