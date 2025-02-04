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

console.log(sortVowels("Codewars")); // 'C|\n|o\nd|\n|e\nw|\n|a\nr|\ns|'
console.log(sortVowels("Rnd Te5T")); // 'R|\nn|\nd|\n |\nT|\n|e\n5|\nT|'
console.log(sortVowels(1337)); // ''
console.log(sortVowels(undefined)); // ''