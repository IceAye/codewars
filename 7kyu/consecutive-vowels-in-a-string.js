function getTheVowels(word) {
    const vowels = 'aeioua';
    const startIndex = word.indexOf('a');

    let result = 0;
    if (startIndex !== -1) {
        let lastChar = 'a';
        result = 1;

        for (let i = startIndex; i < word.length; i++) {
            if (word[i] === vowels.at(vowels.indexOf(lastChar) + 1)) {
                lastChar = word[i];
                result++;
            }
        }

        return result;
    }

    return 0;
}

const a = 'akfheujfkgiaaaofmmfkdfuaiiie';
console.log(getTheVowels(a), 7, a);
const b = 'eiknfhjrytueiouesxdczbeuiuoimnmfhfiuou';
console.log(getTheVowels(b), 0, b);

let s =
    'desrehakkjfuteknvfiyrtfbehjdjrobchrunbcbbhdhehbvudjsnanbakkjndhfjenfndinmfnbfondndendnfudnfnanndhdemdmcnfdemnfjimdfofnmfnfjanmdnhdua';
console.log(getTheVowels(s), 16, s);
s =
    'sudnfhrakekdhhfkakjdjdhvneidkvnudntomcnnamjemdmfudkfhjamvcjedkfdnridnmnbvfhbdjdidncbvchencchdjdodncvchfndnrnencncnffduncbhjdfja';
console.log(getTheVowels(s), 11, s);
s =
    'jurjfdleiifjriisiouajjfyhekkfjvnnmsuimsnvyuhvcodnmfnsumvbjshhsadkvhfeixoua';
console.log(getTheVowels(s), 11, s);
