// ❓ DESCRIPTION:
// A person's full name is usually composed of a first name, middle name and last name; however in some cultures (for example in South India) there may be more than one middle name.
// Write a function that takes the full name of a person, and returns the initials, separated by dots ('.'). The initials must be uppercase. The last name of the person must appear in full, with its first letter in uppercase as well.
// See the pattern below:
// "code wars"            ---> "C.Wars"
// "Barack hussein obama" ---> "B.H.Obama"
// Names in the full name are separated by exactly one space (' ' ) ; without leading or trailing spaces. Names will always be lowercase, except optionally their first letter.
//
// ✅ SOLUTION:
function initials(n) {
    const result = [];
    let array = n.split(" ");
    for (let i = 0; i < array.length; i++) {
        if (i === array.length - 1) {
            let lastName = array[i][0].toUpperCase() + array[i].slice(1);
            result.push(lastName);
        } else result.push(array[i][0].toUpperCase());
    }
    return result.join(".");
}

// 📌 TESTCASE:
console.log(initials("code wars")); // 'C.Wars'
console.log(initials("Barack hussain obama")); // 'B.H.Obama'
console.log(initials("barack hussain Obama")); // 'B.H.Obama'