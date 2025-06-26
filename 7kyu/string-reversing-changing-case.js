// ❓ DESCRIPTION:
// Given 2 string parameters, show a concatenation of:
//
// the reverse of the 2nd string with inverted case; e.g Fish -> HSIf
// a separator in between both strings: @@@
// the 1st string reversed with inverted case and then mirrored; e.g Water -> RETAwwATER
// ** Keep in mind that this kata was initially designed for Shell, I'm aware it may be easier in other languages.**
//
// ✅ SOLUTION:
function reverseAndMirror(s1,s2) {
    function toReversed(string) {
        return [...string].map(char => char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase()).reverse();
    }

    return toReversed(s2).join('') + '@@@' + toReversed(s1).join('') + toReversed(s1).reverse().join('');
}

// 📌 TESTCASE:
console.log(reverseAndMirror("FizZ", "buZZ"), "zzUB@@@zZIffIZz");
console.log(reverseAndMirror("String Reversing","Changing Case"), "ESAc GNIGNAHc@@@GNISREVEr GNIRTssTRING rEVERSING");