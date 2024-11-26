// ❓ DESCRIPTION:
// How many days are we represented in a foreign country?
// My colleagues make business trips to a foreign country. We must find the number of days our company is represented in a country. Every day that one or more colleagues are present in the country is a day that the company is represented. A single day cannot count for more than one day.
// Write a function that recieves a list of pairs and returns the number of days that the company is represented in the foreign country. The first number of the pair is the number of the day of arrival and the second number of the pair is the day of departure of someone who travels, i.e. 1 january is number 1 and 31 of december is 365.
// Example:
// daysRepresented ([[10,17],[200,207]])
// Returns 16 because there are two trips of 8 days, which add up to 16.
//
// ✅ SOLUTION:
function daysRepresented(trips) {
    let result = new Set;
    for (const trip of trips) {
        for (let i = trip[0]; i <= trip[1]; i++) {
            result.add(i);
        }
    }
    return result.size;
}

// 📌 TESTCASE:
console.log(daysRepresented([[10,15],[25,35]])) // 17
console.log(daysRepresented([[2,8], [220,229],[10,16]])) // 24
console.log(daysRepresented([[2,8], [6,16],[17,26]])) // 25
console.log(daysRepresented([[249,263],[269,271],[147,182],[170,196],[230,239],[209,226]])) // 96

