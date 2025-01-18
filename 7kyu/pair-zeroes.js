function pairZeros(arr) {
    let zeroes = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) zeroes.push(i);
    }
    for (let i = 0; i < zeroes.length; i++) {
        if (i % 2 === 1) {
            arr[zeroes[i]] = "";
        }
    }

    return arr.reduce((acc, curr) => {
        if (curr !== "") acc.push(curr);
        return acc;
    }, []);
}

function pairZeros(arr) {
    let zeroes = 0;
    return arr.filter((number) => number || zeroes++ % 2 === 0);
}

console.log(pairZeros([1])); // [1]
console.log(pairZeros([0, 0])); // [0]
console.log(pairZeros([0, 0, 0])); // [0,0]
console.log(pairZeros([1, 0, 1, 0, 2, 0, 0, 3, 0])); // [1,0,1,2,0,3,0]