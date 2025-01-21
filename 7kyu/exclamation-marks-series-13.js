function product(string) {
    let exlamationsCount = 0;
    let questionsCount = 0;

    for (const char of string) {
        if (char === "!") exlamationsCount++;
        if (char === "?") questionsCount++;
    }

    return exlamationsCount * questionsCount;
}

console.log(product("")); // 0
console.log(product("!")); // 0
console.log(product("!!")); // 0
console.log(product("!??")); // 2
console.log(product("!???")); // 3
console.log(product("!!!??")); // 6
console.log(product("!!!???")); // 9
console.log(product("!???!!")); // 9
console.log(product("!ab? ?")); // 2
console.log(product("!????!!!?")); // 20