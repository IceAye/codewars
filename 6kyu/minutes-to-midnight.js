// ❓ DESCRIPTION:
// Teemo is not really excited about the new year's eve, but he has to celebrate it with his friends anyway.
// He has a really big passion about programming and he wants to be productive till midnight. He wants to know how many minutes he has left to work on his new project.
// He doesn't want to look on the clock all the time, so he thought about a function, which returns him the number of minutes.
// Can you write him a function, so he can stay productive?
// The function minutesToMidnight(d) will take a date object as parameter. Return the number of minutes in the following format:
// "x minute(s)"
// You will always get a date object with of today with a random timestamp.
// You have to round the number of minutes.
// Milliseconds doesn't matter!
//
// ✅ SOLUTION:
function minutesToMidnight(d){
    let seconds = d.getSeconds();
    let sum = (23 - d.getHours()) * 60 + (60 - d.getMinutes());
    seconds > 30 ? sum -= 1 : sum;
    return sum === 1? '1 minute' : sum + ' minutes';
}

// 📌 TESTCASE:
let dateBeforeMidnight = new Date(new Date().setHours(23,59,0,0));
console.log(minutesToMidnight(dateBeforeMidnight)) // "1 minute"

let fullDay = new Date(new Date().setHours(0,0,0,0));
console.log(minutesToMidnight(fullDay)) // "1440 minutes"

