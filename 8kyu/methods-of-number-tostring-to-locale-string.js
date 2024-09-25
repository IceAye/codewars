// ❓ DESCRIPTION:
// Coding in function colorOf. function accept 3 parameter:r g b. It means value of color red green and blue. the value range is 0-255.
// Use toString(16) Convert numbers r g b to hex string form. at last, combine them to a web color code and return it.
// the color code should starting with "#". and then use 2 characters per color.
//
// ✅ SOLUTION:
function colorOf(r, g, b) {
    function convertToHex(x) {
        return x.toString(16).length === 1 ? "0" + x.toString(16) : x.toString(16);
    }
    return "#" + convertToHex(r) + convertToHex(g) + convertToHex(b);
}

// 📌 TESTCASE:
console.log(colorOf(255, 0, 0));
console.log(colorOf(0, 111, 0));
console.log(colorOf(1, 2, 3));
