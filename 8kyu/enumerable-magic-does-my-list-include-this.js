// ❓ DESCRIPTION:
// Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.
//
// ✅ SOLUTION 1:
function include(arr, item){
    return arr.includes(item);
}

// ✅ SOLUTION 2:
function include(arr, item) {
    return arr.indexOf(item) !== -1;
}