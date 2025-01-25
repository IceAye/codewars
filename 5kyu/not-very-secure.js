function alphanumeric(string){
    return string.length ? string.replace(/[a-z0-9]/gi, "").length === 0 : false
}

console.log(alphanumeric("Mazinkaiser")) // true
console.log(alphanumeric("hello world_")) // false
console.log(alphanumeric("PassW0rd")) // true
console.log(alphanumeric("     ")) // false