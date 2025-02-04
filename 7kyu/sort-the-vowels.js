// ❓ DESCRIPTION:
// Write a function which takes a input string s and return a string in the following way:
// List all the Vowels on the right side of |
// List every character except Vowels on the left side of |
// for the purpose of this kata, the vowels are : a e i o u
// Return every character in its original case
// Each line is seperated with \n
// Invalid input ( undefined / null / integer ) should return an empty string
//
// ✅ SOLUTION 1:
function sortVowels(s) {
    return typeof s === "string"
        ? [...s]
            .map((char, index) => {
                if (index !== s.length - 1) {
                    return /[euioa]/i.test(char) ? "|" + char + "\n" : char + "|\n";
                }

                return /[euioa]/i.test(char) ? "|" + char : char + "|";
            })
            .join("")
        : "";
}

// ✅ SOLUTION 2:
function sortVowels(s){
    return s === s + [] ? [...s].map(el => el.match(/[aeiou]/i) ? `|${el}` : `${el}|`).join('\n') : ''
}

// 📌 TESTCASE:
console.log(sortVowels("Codewars")); // 'C|\n|o\nd|\n|e\nw|\n|a\nr|\ns|'
console.log(sortVowels("Rnd Te5T")); // 'R|\nn|\nd|\n |\nT|\n|e\n5|\nT|'
console.log(sortVowels(1337)); // ''
console.log(sortVowels(undefined)); // ''