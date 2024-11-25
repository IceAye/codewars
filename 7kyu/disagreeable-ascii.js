function getWeight(name){
    return [...name].reduce((acc, curr)=> acc + (/[a-z]/.test(curr) ? curr.charCodeAt(0) - 32 : /[A-Z]/.test(curr) ? curr.charCodeAt(0) + 32 : 0), 0);
}

console.log(getWeight("Joe")) // 254
console.log(getWeight("CJ")) // 205
console.log(getWeight("cj")) // 141
console.log(getWeight("111100")) // 4
