// ❓ DESCRIPTION:
// Loop Detector
// In this kata, you'll simulate traversing a one-way pointer chain, similar to a singly linked list. Each element in the input list represents the index of the next element to move to.
// Your task is to determine whether this chain eventually enters a loop, or whether it terminates by stepping out of bounds.
//
// Function Signature
// arr is a list or array of non-negative integers.
// Return True (or your language's equivalent) if the traversal enters a loop.
// Return False (or your language's equivalent) if the traversal terminates.
//
// How Traversal Works
// Begin at index 0.
// Read the value at the current index to get the next index.
// Continue stepping through the array.
// If you encounter an index you've already visited, you've found a loop — return True (or your language's equivalent).
// If a step takes you to an index outside the array, the traversal ends — return False (or your language's equivalent).
//
// Examples
// Input: 1, 2, 3, 4, 2 ➞ True
// Path: 0 -> 1 -> 2 -> 3 -> 4 -> 2 -> ... (loop detected)
//
// Input: 1, 2, 3, 4, 5 ➞ False
// Path: 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> (out of bounds)
//
// Input: 0 ➞ True
// Path: 0 -> 0 -> 0 -> ... (self-loop)
//
// Input: 3, 2, 1, 6 ➞ False
// Path: 0 -> 3 -> 6 -> (out of bounds)
//
// Input: 1, 0 ➞ True
// Path: 0 -> 1 -> 0 -> 1 -> ... (cycle of two)
//
// Notes
// The input may be empty. In that case, return False (or your language's equivalent).
// All elements are guaranteed to be non-negative integers.
// You must detect any kind of loop, whether it be a:
// Self-loop (e.g., [0])
// Two-node loop (e.g., [1, 0])
// Larger cycle (e.g., [1, 2, 0])
//
// An index is considered out of bounds if it is greater than or equal to len(arr).

// ✅ SOLUTION:
function hasLoop(indices) {
    const points = new Set([0]);
    const boundary = indices.length;

    if (boundary === 0) return false;

    let currentIndex = indices[0];
    while (true) {
        if (currentIndex >= boundary) return false;
        if (points.has(currentIndex)) return true;
        points.add(currentIndex);
        currentIndex = indices[currentIndex];
    }
}

// 📌 TESTCASE:
console.log(hasLoop([1, 2, 3, 4, 2]), true, `hasLoop([1,2,3,4,2])`);
console.log(hasLoop([1, 2, 3, 4, 5]), false, `hasLoop([1,2,3,4,5])`);
console.log(hasLoop([0]), true, `hasLoop([0])`);
console.log(hasLoop([3, 2, 1, 6]), false, `hasLoop([3,2,1,6])`);
console.log(hasLoop([1, 0]), true, `hasLoop([1,0])`);
console.log(hasLoop([3, 2, 1, 4]), false, `hasLoop([3,2,1,4])`);
console.log(hasLoop([2, 0, 1, 5]), true, `hasLoop([2,0,1,5])`);
console.log(hasLoop([]), false, `hasLoop([])`);
console.log(hasLoop([4,3,1,8,5,0,2,9]), true, `hasLoop([4,3,1,8,5,0,2,9]`);
