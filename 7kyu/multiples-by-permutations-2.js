// ❓ DESCRIPTION:
// We have two consecutive integers, where k1 = k + 1.
// We need to calculate the lowest strictly positive integer n, such that: the values n * k  and n * k1 have the same digits but in different order.
//
// ✅ SOLUTION:
function findLowestInt(k) {
    let lowestInt = 1;
    while (
        (k * lowestInt)
            .toString()
            .split("")
            .sort((a, b) => a - b)
            .join("") !==
        ((k + 1) * lowestInt)
            .toString()
            .split("")
            .sort((a, b) => a - b)
            .join("")
        ) {
        lowestInt++;
    }
    return lowestInt;
}

// 📌 TESTCASE:
console.log(findLowestInt(325)); // 477
console.log(findLowestInt(599)); // 2394
console.log(findLowestInt(855)); //  999
console.log(findLowestInt(1)); // 125874
console.log(findLowestInt(100)); // 8919
console.log(findLowestInt(1000)); // 89919
console.log(findLowestInt(10000)); // 899919