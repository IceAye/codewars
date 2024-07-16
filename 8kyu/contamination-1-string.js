function contamination(text, char){
    return  text.replace(/./g, char)
}

console.log(contamination("abc","z"))
console.log(contamination("_3ebzgh4","&"))
console.log(contamination("//case"," "))
