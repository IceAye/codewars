function missingWord(nums, str) {
    let result = "";

    str = str.replace(/\s/g, "");
    const sorted = nums.sort((a, b) => a - b);

    for (const num of sorted) {
        if (!str[num]) return "No mission today";
        result += str[num].toLowerCase();
    }

    return result;
}

console.log(missingWord([5, 0, 3], "I love you"), "ivy")
console.log(missingWord([29, 31, 8], "The quick brown fox jumps over the lazy dog"), "bay")
console.log(missingWord([12, 4, 6], "Good Morning"), "No mission today")