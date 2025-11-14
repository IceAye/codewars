// ❓ DESCRIPTION:
// Chingel was creating a function which would return true if the input followed this time format 14-10-2016 01:12 (it doesn't need to reflect an actual time) and false otherwise. But looks like he has messed it up. Could you help him out? Please!

// ✅ SOLUTION:
function isItBugged(code){
    return /^(\d{2})-(\d{2})-(\d{4})\s(\d{2}):(\d{2})$/g.test(code);
}

// 📌 TESTCASE:
console.log(isItBugged("01_09_2016 01:20"), false);
console.log(isItBugged("14-10-1066 12:00"), true);
console.log(isItBugged("Tenth of January"), false);