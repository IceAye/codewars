function spacey(array) {
    let result = [];
    let string = "";
    for (const item of array) {
        string += item;
        result.push(string);
    }
    return result;
}

console.log(spacey(["kevin", "has", "no", "space"])); // ['kevin',  'kevinhas',  'kevinhasno',  'kevinhasnospace']
console.log(spacey(["this", "cheese", "has", "no", "holes"])); // ['this',    'thischeese',    'thischeesehas',
// 'thischeesehasno','thischeesehasnoholes']