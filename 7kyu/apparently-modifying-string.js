function apparently(string) {
    return string.replace(/(and|but\b)(?!\sapparently\b)/g, "$1 apparently");
}

console.log(apparently('It was great and I have never been on live television before but sometimes I dont watch this.')) // 'It was great and apparently I have never been on live television before but apparently sometimes I dont watch this.'
console.log(apparently('and')) // 'and apparently'
console.log(apparently('apparently')) // 'apparently'
console.log(apparently('but apparently')) // 'but apparently'