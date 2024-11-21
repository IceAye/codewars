// ❓ DESCRIPTION:
// You're writing an excruciatingly detailed alternate history novel set in a world where Daniel Gabriel Fahrenheit was never born.
// Since Fahrenheit never lived the world kept on using the Rømer scale, invented by fellow Dane Ole Rømer to this very day, skipping over the Fahrenheit and Celsius scales entirely.
// Your magnum opus contains several thousand references to temperature, but those temperatures are all currently in degrees Celsius. You don't want to convert everything by hand, so you've decided to write a function named celsiusToRomer (for CoffeeScript, Haskell, JS) or celsius_to_romer (for Crystal, PHP, Python, Ruby), that takes a temperature in degrees Celsius and returns the equivalent temperature in degrees Rømer.
//
// ✅ SOLUTION:

function celsiusToRomer(temp) {
    return 21 / 40 * temp + 7.5
}

// 📌 TESTCASE:
console.log(celsiusToRomer(24)) // 20.1
console.log(celsiusToRomer(8)) // 11.7
console.log(celsiusToRomer(29)) // 22.725