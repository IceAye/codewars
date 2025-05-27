function longestRepetition(s) {
    const max = ['', 0];
    let temp = 1;
    let i = 1;
    while (i < s.length) {
        while (s[i] === s[i - 1]) {
            temp++;
            i++;
        }
        if (max[1] < temp) {
            max[1] = temp;
            max[0] = s[i - 1];
        }
        i++;
        temp = 1;
    }

    return max;
}

function longestRepetition(s) {
    const max = ['', 0];
    if (s.length) {
        let array = s.match(/(.)\1*/g);
        for (const item of array) {
            if (item.length > max[1]) {
                max[0] = item[0];
                max[1] = item.length;
            }
        }
    }
    return max;
}

console.log( longestRepetition("aaaabb"),      ["a",4] );
console.log( longestRepetition("bbbaaabaaaa"), ["a",4] );
console.log( longestRepetition("cbdeuuu900"),  ["u",3] );
console.log( longestRepetition("abbbbb"),      ["b",5] );
console.log( longestRepetition("aabb"),        ["a",2] );
console.log( longestRepetition(""),            ["",0] );
console.log( longestRepetition("ba"),          ["b",1] );

// https://www.codewars.com/kata/586d6cefbcc21eed7a001155/train/javascript
