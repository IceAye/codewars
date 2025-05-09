// ❓ DESCRIPTION:
// Lot of museum allow you to be a member, for a certain amount amount_by_year you can have unlimitted acces to the museum.
//
// In this kata you should complete a function in order to know after how many visit it will be better to take an annual pass. The function take 2 arguments annual_price and individual_price.
//
// ✅ SOLUTION 1:
function howManyTimes(annualPrice, individualPrice) {
    let result = 0;
    let sum = 0;
    while (sum < annualPrice) {
        result++;
        sum += individualPrice;
    }
    return individualPrice ? result : 0;
}

// ✅ SOLUTION 2:
function howManyTimes(annualPrice, individualPrice) {
    return Math.ceil(annualPrice / individualPrice);
}

// 📌 TESTCASE:
console.log(howManyTimes(40,15), 3)
console.log(howManyTimes(30,10), 3)
console.log(howManyTimes(80,15), 6)