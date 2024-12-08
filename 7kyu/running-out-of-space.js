function spacey(array) {
    let result = [];
    let string = "";
    for (const item of array) {
        string += item;
        result.push(string);
    }
    return result;
}

function spacey(array) {
    let string = "";
    return array.map(item => string += item);
}

console.log(spacey(["kevin", "has", "no", "space"])); // ['kevin',  'kevinhas',  'kevinhasno',  'kevinhasnospace']
console.log(spacey(["this", "cheese", "has", "no", "holes"])); // ['this',    'thischeese',    'thischeesehas',
// 'thischeesehasno','thischeesehasnoholes']