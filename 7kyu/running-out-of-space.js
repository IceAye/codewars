// ❓ DESCRIPTION:
// Kevin is noticing his space run out! Write a function that removes the spaces from the values and returns an array showing the space decreasing.
// For example, running this function on the array ['i', 'have','no','space'] would produce ['i','ihave','ihaveno','ihavenospace']
//
// ✅ SOLUTION 1:
function spacey(array) {
    let result = [];
    let string = "";
    for (const item of array) {
        string += item;
        result.push(string);
    }
    return result;
}

// ✅ SOLUTION 2:
function spacey(array) {
    let string = "";
    return array.map(item => string += item);
}

// 📌 TESTCASE:
console.log(spacey(["kevin", "has", "no", "space"])); // ['kevin',  'kevinhas',  'kevinhasno',  'kevinhasnospace']
console.log(spacey(["this", "cheese", "has", "no", "holes"])); // ['this',    'thischeese',    'thischeesehas',
// 'thischeesehasno','thischeesehasnoholes']