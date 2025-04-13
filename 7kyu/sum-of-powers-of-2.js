const powers = (n) => {
    return Array.from(n.toString(2), Number)
                .reverse()
                .reduce((acc, curr, ind) => {
                    if (curr === 1) {
                        acc.push(2 ** ind);
                    }
                    return acc;
                }, []);
};

console.log(powers(1), [1]);
console.log(powers(2), [2]);
console.log(powers(6), [2, 4]);