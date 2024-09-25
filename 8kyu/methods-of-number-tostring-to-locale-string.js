function colorOf(r, g, b) {
    function convertToHex(x) {
        return x.toString(16).length === 1 ? "0" + x.toString(16) : x.toString(16);
    }
    return "#" + convertToHex(r) + convertToHex(g) + convertToHex(b);
}

console.log(colorOf(255, 0, 0));
console.log(colorOf(0, 111, 0));
console.log(colorOf(1, 2, 3));
