function scramble(str1, str2) {
    function toHashmap(word){
        let map = new Map();
        for (const char of word) {
            map.set(char, map.get(char) + 1 || 1);
        }
        return map;
    }
    for (const [key, value] of [...toHashmap(str2).entries()]) {
        if (value > toHashmap(str1).get(key) || !toHashmap(str1).has(key)) return false;
    }
    return true;
}


console.log(scramble('rkqodlw', 'world')) // True
console.log(scramble('cedewaraaossoqqyt', 'codewars')) // True
console.log(scramble('katas', 'steak')) // False