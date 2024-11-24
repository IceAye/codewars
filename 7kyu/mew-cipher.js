function decipher(code) {
    const abc = " abcdefghijklmnopqrstuvwxyz"
    let result = new Array(code[0].length).fill(0)
    for (const string of code) {
        for (let i = 0; i < string.length; i++) {
            result[i] += abc.indexOf(string[i])
        }
    }
    return result.map(item => abc[Math.floor(item / code.length)]).join("")
}

console.log(decipher(["u lk zxuq hfk as fouh","y l  zpuv  xe at sicd","welvayfuqbfpeaauaqcrc"])) // "walk your dog at nine"
