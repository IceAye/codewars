function tidyNumber(n){
    let array = Array.from(n.toString(), Number);
    for (let i = 0; i < array.length; i++) {
        if (array[i] > array[i + 1]) return false;
    }
    return true;
}

console.log(tidyNumber(12)) // true
console.log(tidyNumber(102)) // false
console.log(tidyNumber(9672)) // false
console.log(tidyNumber(2789)) // true
console.log(tidyNumber(2335)) // true