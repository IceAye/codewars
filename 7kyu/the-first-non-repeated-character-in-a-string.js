function firstNonRepeated(s) {
    return [...s].find((item) => s.indexOf(item) === s.lastIndexOf(item)) || null;
}

console.log(firstNonRepeated("test"), 'e')
console.log(firstNonRepeated("teeter"), 'r')
console.log(firstNonRepeated("1122321235121222"), '5')
console.log(firstNonRepeated("rend"), 'r')