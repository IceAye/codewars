// ❓ DESCRIPTION:
// Create a function that returns a villain name based on the user's birthday. The birthday will be passed to the function as a valid Date object, so for simplicity, there's no need to worry about converting strings to dates.
// The first name will come from the month, and the last name will come from the last digit of the date.
// The returned value should be a string in the form of "First Name Last Name".
//
// For example, a birthday of November 18 would return "The Terrifying Teaspoon"
//
// ✅ SOLUTION:
function getVillainName(birthday){
    const m = ["Evil","Vile","Cruel","Trashy","Despicable","Embarrassing","Disreputable","Atrocious","Twirling","Orange","Terrifying","Awkward"];
    const d = ["Mustache","Pickle","Hood Ornament","Raisin","Recycling Bin","Potato","Tomato","House Cat","Teaspoon","Laundry Basket"];

    return `The ${m[birthday.getMonth()]} ${d[+birthday.getDate().toString().at(-1)]}`
}

// 📌 TESTCASE:
console.log(getVillainName(new Date("April 21"))) // "The Trashy Pickle"
