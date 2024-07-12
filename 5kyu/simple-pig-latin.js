function pigIt(str){
    return str.replace(/\w+/g, (match) => match.slice(1) + match.at(0) + "ay")
}

console.log('Output: ' , pigIt('Pig latin is cool'))
console.log('Output: ' , pigIt('Hello world !'))