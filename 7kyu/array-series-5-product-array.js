// ❓ DESCRIPTION:
// Given an array/list [] of integers , Construct a product array Of same size Such That prod[i] is equal to The Product of all the elements of Arr[] except Arr[i].
//
// ✅ SOLUTION 1:
function productArray(numbers){
    let result = [];
    for (const number of numbers) {
        let prod = numbers.reduce((acc, curr) => acc * curr) / number;
        result.push(prod);
    }
    return result;
}

// ✅ SOLUTION 2:
function productArray(numbers){
    return numbers.map(number => numbers.reduce((acc,curr) => acc * curr) / number)
}

// 📌 TESTCASE:
console.log(productArray([12,20])) // [20,12]
console.log(productArray([3,27,4,2])) // [216,24,162,324]
console.log(productArray([13,10,5,2,9])) // [900,1170,2340,5850,1300]
console.log(productArray([16,17,4,3,5,2])) // [2040,1920,8160,10880,6528,16320]