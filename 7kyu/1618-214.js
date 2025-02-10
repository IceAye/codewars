function add(num1, num2) {
    let result = [];
    let array1 = Array.from(num1.toString(), Number).reverse();
    let array2 = Array.from(num2.toString(), Number).reverse();

    let max = Math.max(array2.length, array1.length);
    for (let i = 0; i < max; i++) {
        if (array2[i] === undefined) array2[i] = 0;
        if (array1[i] === undefined) array1[i] = 0;

        result.push(array1[i] + array2[i]);
    }
    return result.reverse().join("");
}

console.log(add(2, 11)) // 13
console.log(add(0, 1)) // 1
console.log(add(0, 0)) // 0
console.log(add(16, 18)) // 214
console.log(add(26, 39)) // 515
console.log(add(122, 81)) // 1103
console.log(add(1222, 30277)) // 31499
console.log(add(1236, 30977)) // 31111013
console.log(add(38810, 1383)) // 391193
console.log(add(49999, 49999)) // 818181818
