function tripleX(str) {
    let index = str.indexOf("x");
    return str.slice(index, index + 3) === "xxx";
}

console.log(tripleX("abraxxxas")); // true
console.log(tripleX("xoxotrololololololoxxx")); // false
console.log(tripleX("soft kitty, warm kitty, xxxxx")); // true
console.log(tripleX("softx kitty, warm kitty, xxxxx")); // false