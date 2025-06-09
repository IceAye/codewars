// ❓ DESCRIPTION:
// Make me slow! Calling makeMeSlow() should take at least 7 seconds.
//
// ✅ SOLUTION 1:
function makeMeSlow() {
    const start = Date.now();
    while (Date.now() - start < 7000) {
    }
}

// ✅ SOLUTION 2:
function makeMeSlow() {
    // this function is too fast!
    for (let x = 0; x < 5500000000; x++) {
    }
}