// SOLUTION 1:
function vaporcode(string) {
    return string.toUpperCase().split(" ").join("").split("").join("  ");
}

// SOLUTION 2:
function vaporcode(string) {
    return Array.from(string.replace(/\s+/g, "").toUpperCase()).join("  ");
}

console.log(vaporcode("Lets go to the movies")) // "L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S"
console.log(vaporcode("Why isn't my code working")) // "W  H  Y  I  S  N  T  M  Y  C  O  D  E  W  O  R  K  I  N  G"
