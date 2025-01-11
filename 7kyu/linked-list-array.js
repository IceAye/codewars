// ❓ DESCRIPTION:
// Linked lists are data structures composed of nested or chained objects, each containing a single value and a reference to the next object.
//
// Here's an example of a list:
// {value: 1, next: {value: 2, next: {value: 3, next: null}}}
// Write a function listToArray (or list_to_array in Python) that converts a list to an array, like this:
// [1, 2, 3]
// Assume all inputs are valid lists with at least one value. For the purpose of simplicity, all values will be either numbers, strings, or Booleans.
//
// ✅ SOLUTION 1:
const listToArray = (list, result = []) => {
    for (const key in list) {
        if (key === "value") result.push(list[key]);
        if (key === "next") listToArray(list[key], result);
    }
    return result;
};

// ✅ SOLUTION 2:
function listToArray(list) {
    let result = [];
    do {
        result.push(list.value);
    } while (list = list.next);
    return result;
}

// 📌 TESTCASE:
const list1 = { value: 1, next: { value: 2, next: { value: 3, next: null } } };
const list2 = { value: "foo", next: { value: "bar", next: null } };

console.log(listToArray(list1)); // [1, 2, 3]
console.log(listToArray(list2)); // ["foo", "bar"]