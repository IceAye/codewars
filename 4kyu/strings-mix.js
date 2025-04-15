function mix(s1, s2) {
    let obj = {};
    for (const char of s1) {
        if (/[a-z]/.test(char)) {
            (obj[char] === undefined) ? obj[char] = [1, 0] : obj[char][0] += 1;
        }
    }
    for (const char of s2) {
        if (/[a-z]/.test(char)) {
            (obj[char] === undefined) ? obj[char] = [0, 1] : obj[char][1] += 1;
        }
    }

    let result = [];
    for (const item in obj) {
        if (Math.max(...obj[item]) === 1) continue;
        if (obj[item][0] > obj[item][1]) result.push(`1:${item.repeat(obj[item][0])}`)
        if (obj[item][1] > obj[item][0]) result.push(`2:${item.repeat(obj[item][1])}`)
        if (obj[item][1] === obj[item][0]) result.push(`=:${item.repeat(obj[item][0])}`)
    }
    return result.sort((a, b) => b.length - a.length || a.codePointAt(0) - b.codePointAt(0) || a.codePointAt(2) - b.codePointAt(2)).join('/');
}

console.log(mix("Are they here", "yes, they are here"), "2:eeeee/2:yy/=:hh/=:rr")
console.log(mix("looping is fun but dangerous", "less dangerous than coding"), "1:ooo/1:uuu/2:sss/=:nnn/1:ii/2:aa/2:dd/2:ee/=:gg")
console.log(mix(" In many languages", " there's a pair of functions"), "1:aaa/1:nnn/1:gg/2:ee/2:ff/2:ii/2:oo/2:rr/2:ss/2:tt")
console.log(mix("Lords of the Fallen", "gamekult"), "1:ee/1:ll/1:oo")
console.log(mix("codewars", "codewars"), "")
console.log(mix("A generation must confront the looming ", "codewarrs"), "1:nnnnn/1:ooooo/1:tttt/1:eee/1:gg/1:ii/1:mm/=:rr")