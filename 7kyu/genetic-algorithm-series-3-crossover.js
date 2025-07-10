// ❓ DESCRIPTION:
// In this kata you have to implement a function that receives two chromosomes chromosome1, chromosome2 and a zero-based index and it has to return an array with the crossover result on both chromosomes [chromosome1, chromosome2].
//
// Example:
// chromosome1 = "111000"
// chromosome2 = "000110"
// index = 3
// # should return ["111110", "000000"]

// ✅ SOLUTION:
const crossover = (chromosome1, chromosome2, index) => {
    return [chromosome1.slice(0, index) + chromosome2.slice(index), chromosome2.slice(0, index) + chromosome1.slice(index)];
};

// 📌 TESTCASE:
console.log(crossover('110','001',2)) // ['111', '000']
console.log(crossover('111000','000110',3)) // ['111110', '000000']