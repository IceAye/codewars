function reverse(str) {
    return str
        .trim()
        .split(/\s+/)
        .map((item, index) => index % 2 === 1 ? [...item].reverse().join("") : item)
        .join(" ");
}

console.log(reverse("Reverse this string, please!")) // "Reverse siht string, !esaelp"
console.log(reverse("I really don't like reversing strings!")) // "I yllaer don't ekil reversing !sgnirts"
console.log(reverse("  many    spaces   here  ")) // many secaps here