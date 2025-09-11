// ❓ DESCRIPTION:
// You need to hire a catering company out of three for lunch in a birthday party. The first caterer offers only a basic buffet which costs $15 per person. The second one has an economy buffet at $20 per person and the third one has a premium buffet at $30 per person. The third one gives a 20% discount if the number of persons to be served is greater than 60. You want to spend the maximum that fits into the budget.
// The function takes two arguments denoting the budget in $ and the number of people. Return 1, 2 or 3 for the three caterers as per the above criteria. Return -1 if there are no people or the budget is lower than the cost of buffets from the first caterer.
// Number of orders is always equal to number of people.

// ✅ SOLUTION:
function findCaterer(budget, people){
    if (!people) return -1;

    const total = budget / people;
    if (people > 60) {
        const discCost = 30 * 0.8;
        if ((budget / people) >= discCost) return 3
    }

    return  total >= 30 ? 3 : total >= 20 ? 2 : total >= 15 ? 1 : -1;
}

// 📌 TESTCASE:
console.log(findCaterer(150, 10), 1);
console.log(findCaterer(1500, 60), 2);
console.log(findCaterer(1500, 61), 3);
console.log(findCaterer(100, 0), -1);
console.log(findCaterer(200, 5), 3);
console.log(findCaterer(1000, 45), 2);
console.log(findCaterer(940, 70), -1);