// ❓ DESCRIPTION:
// Beaches are filled with sand, water, fish, and sun. Given a string, calculate how many times the words "Sand", "Water", "Fish", and "Sun" appear without overlapping (regardless of the case).
//
// ✅ SOLUTION:
function sumOfABeach(beach) {
    return beach.split(/sun|water|sand|fish/i).length - 1;
}

// 📌 TESTCASE:
console.log(sumOfABeach("SanD"))  // 1
console.log(sumOfABeach("sunsunsunsun"))  // 4
console.log(sumOfABeach("123FISH321"))  // 1
console.log(sumOfABeach("weoqipurpoqwuirpousandiupqwoieurioweuwateruierqpoiweurpouifiShqowieuqpwoeuisUn"))  // 4
console.log(sumOfABeach("sAnDsandwaTerwatErfishFishsunsunsandwater"))  // 10
console.log(sumOfABeach("joifjepiojfoiejfoajoijawoeifjowejfjoiwaefjiaowefjaofjwoj fawojef "))  // 0
console.log(sumOfABeach("jwefjwjfsandsandwaterwaterfishfishsunsunsandwateriojwhefa;jawof;jawio;f"))  // 10
console.log(sumOfABeach("sununsu"))  // 1
console.log(sumOfABeach("sandandndsansa"))  // 1
console.log(sumOfABeach("wateratertererwatewatwa"))  // 1
console.log(sumOfABeach("fishishshfisfi"))  // 1