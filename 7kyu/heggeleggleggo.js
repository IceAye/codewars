function heggeleggleggo(word){
    return word.replace(/([^aeiou ])/gi, '$1egg');
}

console.log(heggeleggleggo("hello")) // "heggeleggleggo"
console.log(heggeleggleggo("code here")) // "ceggodegge heggeregge"