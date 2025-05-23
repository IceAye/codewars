// ❓ DESCRIPTION:
// Move all exclamation marks to the end of the sentence
//
// Examples
// "Hi!"          ---> "Hi!"
// "Hi! Hi!"      ---> "Hi Hi!!"
// "Hi! Hi! Hi!"  ---> "Hi Hi Hi!!!"
// "Hi! !Hi Hi!"  ---> "Hi Hi Hi!!!"
// "Hi! Hi!! Hi!" ---> "Hi Hi Hi!!!!"
//
// ✅ SOLUTION 1:
function remove(string) {
    let count = 0
    let array = string.split(" ");
    for (let i = 0; i < array.length; i++) {
        count += array[i].match(/!/g) ? array[i].match(/!/g).length : 0;
        array[i] = array[i].replace(/!/g, "");
    }
    array[array.length - 1] += "!".repeat(count);
    return array.join(" ");
}

// ✅ SOLUTION 2:
function remove(string) {
    return string.replace(/!/g, "") + string.replace(/[^!]/g, "");
}

// 📌 TESTCASE:
console.log(remove("Hi!")) // "Hi!"
console.log(remove("Hi! Hi!")) // "Hi Hi!!"
console.log(remove("Hi! Hi! Hi!")) // "Hi Hi Hi!!!"
console.log(remove("Hi! !Hi Hi!")) // "Hi Hi Hi!!!"
console.log(remove("Hi! Hi!! Hi!")) // "Hi Hi Hi!!!!"

