// ❓ DESCRIPTION:
// Write a function that converts any sentence into a V A P O R W A V E sentence. a V A P O R W A V E sentence converts all the letters into uppercase, and adds 2 spaces between each letter (or special character) to create this V A P O R W A V E effect.
// Note that spaces should be ignored in this case.
//
// ✅ SOLUTION 1:
function vaporcode(string) {
    return string.toUpperCase().split(" ").join("").split("").join("  ");
}

// ✅ SOLUTION 2:
function vaporcode(string) {
    return Array.from(string.replace(/\s+/g, "").toUpperCase()).join("  ");
}

// 📌 TESTCASE:
console.log(vaporcode("Lets go to the movies")) // "L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S"
console.log(vaporcode("Why isn't my code working")) // "W  H  Y  I  S  N  T  M  Y  C  O  D  E  W  O  R  K  I  N  G"
