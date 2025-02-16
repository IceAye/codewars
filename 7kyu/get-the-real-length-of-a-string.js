function getRealLength(string) {
    return [...string].length;
}

console.log(getRealLength("")) // 0
console.log(getRealLength("abcd")) // 4
console.log(getRealLength("中国")) // 2
console.log(getRealLength("𝓪𝓫𝓬𝓭")) // 4
console.log(getRealLength("𨭎𩷶")) // 2
console.log(getRealLength("😸🦌🚀")) // 3
console.log(getRealLength("↓→↑←")) // 4
console.log(getRealLength("\nabc\ndef\n")) // 9