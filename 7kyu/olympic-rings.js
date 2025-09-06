function olympicRing(a) {
    let count = 0;
    a.split('').map((char) =>
                        /[aAbdDegoOpPqQR]/.test(char)
                        ? count++
                        : char === 'B'
                          ? (count += 2)
                          : (count += 0),
    );
    count = Math.floor(count / 2);
    return count === 2
           ? 'Bronze!'
           : count === 3
             ? 'Silver!'
             : count >= 4
               ? 'Gold!'
               : 'Not even a medal!';
}

console.log(olympicRing('wHjMudLwtoPGocnJ'), 'Bronze!');
console.log(olympicRing('eCEHWEPwwnvzMicyaRjk'), 'Bronze!');
console.log(olympicRing('JKniLfLW'), 'Not even a medal!');
