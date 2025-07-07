// ❓ DESCRIPTION:
// Create a function that takes an input String and returns a String, where all the uppercase words of the input String are in front and all the lowercase words at the end. The order of the uppercase and lowercase words should be the order in which they occur.
//
// If a word starts with a number or special character, skip the word and leave it out of the result.
//
// Input String will not be empty.
//
// For an input String: "hey You, Sort me Already!" the function should return: "You, Sort Already! hey me"

// ✅ SOLUTION:
function capitalsFirst(str){
    const array = str.split(' ');
    const capitals =  array.filter(word => /[A-Z]/.test(word[0]));
    const others = array.filter(word =>  /[a-z]/.test(word[0]));
    return [...capitals, ...others].join(' ');
}

// 📌 TESTCASE:
console.log(capitalsFirst("hey You, Sort me Already!"), "You, Sort Already! hey me")