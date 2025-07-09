// ❓ DESCRIPTION:
// Write a function that will take a key of X and place it in the middle of Y repeated N times.
//
// Extra challege (not tested): You can complete this with under 70 characters without using regex. Challenge yourself to do this. It wont be best practices but it will work.
//
// Rules:
//
// If X cannot be placed in the middle, return X.
//
// N will always be > 0.

// ✅ SOLUTION:
function middleMe(N, X, Y){
    if (N % 2 === 0) {
        let stringY = Y.repeat(N / 2);
        return stringY + X + stringY;
    }
    return X;
}

// 📌 TESTCASE:
console.log(middleMe(18, 'z', '#'), '#########z#########');
console.log(middleMe(19, 'z', '#'), 'z');