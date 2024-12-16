function capital(capitals) {
    return capitals.map((item) => `The capital of ${item.state || item.country} is ${item.capital}`);
}

console.log(capital([{ state: "Maine", capital: "Augusta" }])) // "The capital of Maine is Augusta"
console.log(capital([{ country: "Spain", capital: "Madrid" }])) // "The capital of Spain is Madrid"
console.log(capital([{ state: "Maine", capital: "Augusta" },{ country: "Spain", capital: "Madrid" }]))
// "The capital of Spain is Madrid"