// ❓ DESCRIPTION:
// You and your best friend Stripes have just landed your first high school jobs! You'll be delivering newspapers to your neighbourhood on weekends. For your services you'll be charging a set price depending on the quantity of the newspaper bundles.
//
// The cost of deliveries is:
// $3.85 for 40 newspapers
// $1.93 for 20
// $0.97 for 10
// $0.49 for 5
// $0.10 for 1
// Stripes is taking care of the footwork doing door-to-door drops and your job is to take care of the finances. What you'll be doing is providing the cheapest possible quotes for your services.
// Write a function that's passed an integer representing the amount of newspapers and returns the cheapest price. The returned number must be rounded to two decimal places.
//
// ✅ SOLUTION 1:
function cheapestQuote(newspapers) {
    let count = 0;
    while (newspapers >= 40) {
        count += 3.85;
        newspapers -= 40;
    }
    while (newspapers >= 20) {
        count += 1.93;
        newspapers -= 20;
    }
    while (newspapers >= 10) {
        count += 0.97;
        newspapers -= 10;
    }
    while (newspapers >= 5) {
        count += 0.49;
        newspapers -= 5;
    }
    while (newspapers >= 1) {
        count += 0.10;
        newspapers -= 1;
    }
    return +count.toFixed(2);
}

// ✅ SOLUTION 2:
function cheapestQuote(newspapers) {
    let count = 0;

    count += Math.floor(newspapers/40) * 3.85;
    newspapers %= 40;

    count += Math.floor(newspapers/20) * 1.93;
    newspapers %= 20;

    count += Math.floor(newspapers/10) * 0.97;
    newspapers %= 10;

    count += Math.floor(newspapers/5) * 0.49;
    newspapers %= 5;

    count += newspapers * 0.1;

    return Math.round(count * 100) / 100;
}

// 📌 TESTCASE:
console.log(cheapestQuote(40)) //  3.85
console.log(cheapestQuote(20)) //  1.93
console.log(cheapestQuote(10)) //  0.97
console.log(cheapestQuote(5)) //  0.49
console.log(cheapestQuote(1)) //  0.10
console.log(cheapestQuote(41)) //  3.95
console.log(cheapestQuote(80)) //  7.70
console.log(cheapestQuote(26)) //  2.52
