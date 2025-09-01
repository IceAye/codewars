// ❓ DESCRIPTION:
// Fans of The Wire will appreciate this one. For those that haven't seen the show, the Barksdale Organization has a simple method for encoding telephone numbers exchanged via pagers: "Jump to the other side of the 5 on the keypad, and swap 5's and 0's."
// Here's a keypad for visualization.
//
// ┌───┬───┬───┐
// │ 1 │ 2 │ 3 │
// ├───┼───┼───┤
// │ 4 │ 5 │ 6 │
// ├───┼───┼───┤
// │ 7 │ 8 │ 9 │
// └───┼───┼───┘
//     │ 0 │
//     └───┘
// Detective, we're hot on their trail! We have a big pile of encoded messages here to use as evidence, but it would take way too long to decode by hand. Could you write a program to do this for us?
// Write a function called decode(). Given an encoded string of exactly 10 digits, return the actual phone number in string form. Don't worry about input validation, parenthesis, or hyphens.

// ✅ SOLUTION:
function decode(string) {
    const code = [5,9,8,7,6,0,4,3,2,1];
    return string.replace(/\d/g, c => code[c]);
}

// 📌 TESTCASE:
let phoneNumbers = {
    "4103432323": "6957678787",
    "4103438970": "6957672135",
    "4104305768": "6956750342",
    "4102204351": "6958856709",
    "4107056043": "6953504567",
    "4105753410": "6950307695"
};

for (let code in phoneNumbers) {
    console.log(decode(code), phoneNumbers[code]);
}