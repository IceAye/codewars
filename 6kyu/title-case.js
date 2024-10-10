// ❓ DESCRIPTION:
// A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.
//
// Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.
//
// Arguments
// First argument (required): the original string to be converted.
// Second argument (optional): space-delimited list of minor words that must always be lowercase except for the first word in the string. The JavaScript/CoffeeScript tests will pass undefined when this argument is unused.
//
// ✅ SOLUTION:
function titleCase(title, minorWords) {
    if (title.length === 0) return "";

    if (minorWords !== undefined) {
        let minorArr = minorWords.split(" ").map((item) => item.toLowerCase());
        let titleArr = title
            .split(" ")
            .map((item) =>
                minorArr.includes(item.toLowerCase())
                    ? item.toLowerCase()
                    : item[0].toUpperCase() + item.slice(1).toLowerCase(),
            )
            .join(" ");
        return titleArr[0].toUpperCase() + titleArr.slice(1);
    } else {
        return title
            .split(" ")
            .map((item) => item[0].toUpperCase() + item.slice(1).toLowerCase())
            .join(" ");
    }
}

// 📌 TESTCASE:
console.log(titleCase(""));
console.log(titleCase("a clash of KINGS", "a an the of"));
console.log(titleCase("THE WIND IN THE WILLOWS", "The In"));
console.log(titleCase("the quick brown fox", "The In"));
