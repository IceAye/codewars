// ❓ DESCRIPTION:
// Write a function filterLucky/filter_lucky() that accepts a list of integers and filters the list to only include the elements that contain the digit 7.
// Don't worry about bad input, you will always receive a finite list of integers.
//
// ✅ SOLUTION 1:
const filterLucky = x =>{
    return x.filter(number => number.toString().includes('7'));
}

// ✅ SOLUTION 2:
const filterLucky = x =>{
    return x.filter(number => /7/.test(number));
}

// 📌 TESTCASE:
console.log( filterLucky([1,2,3,4,5,6,7,68,69,70,15,17]), [7,70,17] );
console.log( filterLucky([71,9907,69]), [71,9907] );