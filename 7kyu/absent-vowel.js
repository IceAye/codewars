function absentVowel(x) {
    const abc = "aeiou";
    for (const char of abc) {
        if (!x.includes(char)) return abc.indexOf(char);
    }
}

console.log(absentVowel("John Doe hs seven red pples under his bsket")); // 0
console.log(absentVowel("Bb Smith sent us six neatly arranged range bicycles")); // 3