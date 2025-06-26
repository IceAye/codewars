function reverseAndMirror(s1,s2) {
    function toReversed(string) {
        return [...string].map(char => char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase()).reverse();
    }

    return toReversed(s2).join('') + '@@@' + toReversed(s1).join('') + toReversed(s1).reverse().join('');
}

console.log(reverseAndMirror("FizZ", "buZZ"), "zzUB@@@zZIffIZz");
console.log(reverseAndMirror("String Reversing","Changing Case"), "ESAc GNIGNAHc@@@GNISREVEr GNIRTssTRING rEVERSING");