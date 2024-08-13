function neutralise( s1 , s2 ) {
    let result = ''
    for (let i = 0; i < s1.length; i++) {
        if (s1.at(i) === s2.at(i)) {
            result += s1.at(i)
        } else {
            result += 0
        }
    }
    return result;
}

console.log(neutralise("--++--", "++--++"))
console.log(neutralise("-+-+-+", "-+-+-+"))
console.log(neutralise("+++--+---", "++----++-"))