// ❓ DESCRIPTION:
// Complete the method that takes a sequence of objects with two keys each: country or state, and capital. Keys may be symbols or strings.
// The method should return an array of sentences declaring the state or country and its capital.
//
// ✅ SOLUTION:
function capital(capitals) {
    return capitals.map((item) => `The capital of ${item.state || item.country} is ${item.capital}`);
}

// 📌 TESTCASE:
console.log(capital([{ state: "Maine", capital: "Augusta" }])) // "The capital of Maine is Augusta"
console.log(capital([{ country: "Spain", capital: "Madrid" }])) // "The capital of Spain is Madrid"
console.log(capital([{ state: "Maine", capital: "Augusta" },{ country: "Spain", capital: "Madrid" }]))
// "The capital of Spain is Madrid"