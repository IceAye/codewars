// ❓ DESCRIPTION:
// You are given an array of integers. On each move you are allowed to increase exactly one of its element by one. Find the minimal number of moves required to obtain a strictly increasing sequence from the input.
//
// ✅ SOLUTION:
function arrayChange(arr) {
    let count = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] >= arr[i]) {
            for (let j = 0; ; j++) {
                if (arr[i - 1] >= arr[i]) {
                    arr[i]++;
                    count++;
                } else {
                    break;
                }
            }
        }
    }

    return count;
}