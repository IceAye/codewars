// ❓ DESCRIPTION:
// Add an item to the list:
// AddExtra method adds a new item to the list and returns the list. The new item can be any object, and it does not matter. (lets say you add an integer value, like 13)
// In our test case we check to assure that the returned list has one more item than the input list. However the method needs some modification to pass this test.
// P.S. You have to create a new list and add a new item to that.
//
// ✅ SOLUTION:
function addExtra(listOfNumbers) {
    return [...listOfNumbers, 13];
}

// 📌 TESTCASE:
console.log(addExtra([1, 2, 3]));
console.log(addExtra([]));