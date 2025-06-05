function solve(s, k){
    if (k >= s.length) return '';

    let set = [...new Set(s)].sort();

    let i = 0;
    while (k > 0) {
        let char = new RegExp(`${set[i]}`, '');
        while (char.test(s) && k > 0) {
            s = s.replace(char, "");
            k--;
        }
        i++;
    }
    return s
}


console.log(solve('abracadabra', 1),'bracadabra');
console.log(solve('abracadabra', 2),'brcadabra');
console.log(solve('abracadabra', 6),'rcdbr');
console.log(solve('abracadabra', 8),'rdr');
console.log(solve('abracadabra', 50),'');