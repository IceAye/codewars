const complete = (str) => {
    if (str.length <= 1) return str + str;

    for (let i = 1; i < str.length; i++) {
        const suffix = str.slice(i);
        const reversed = suffix.split('').reverse().join('');
        if (suffix === reversed) {
            const prefixToAdd = str.slice(0, i).split('').reverse().join('');
            return str + prefixToAdd;
        }
    }

    return str + str.slice(0, -1).split('').reverse().join('');
};

console.log(complete('Baa'), 'BaaB');
console.log(complete('aaB'), 'aaBaa');
console.log(complete('x'), 'xx');
console.log(complete('aaBB'), 'aaBBaa');
console.log(complete('aOOa'), 'aOOaOOa');
console.log(complete('xyz'), 'xyzyx');
console.log(complete('AaaaA'), 'AaaaAaaaA');
console.log(complete('abab'), 'ababa');
