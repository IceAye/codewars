// ❓ DESCRIPTION:
// Define the function counter that returns a function that returns an increasing value.
// The first value should be 1.
// You're going to have to use closures.

// 📌 EXAMPLE:
// const newCounter = counter();
// newCounter() // 1
// newCounter() // 2

// ✅ SOLUTION:
function counter(){
    let value = 0;
    return () => {
        value += 1;
        return value;
    };
}