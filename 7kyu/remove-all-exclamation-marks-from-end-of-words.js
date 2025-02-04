function remove (string) {
    return string.split(' ').map(str => str.replace(/!+$/g, '')).join(' ');
}

console.log(remove("Hi!")) // "Hi"
console.log(remove("Hi!!!")) // "Hi"
console.log(remove("!Hi")) // "!Hi"
console.log(remove("!Hi!")) // "!Hi"
console.log(remove("Hi! Hi!")) // "Hi Hi"
console.log(remove("!!!Hi !!hi!!! !hi")) // "!!!Hi !!hi !hi"