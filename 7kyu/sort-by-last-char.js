// SOLUTION 1:
function last(x){
    return x.split(" ").sort((a, b) => {
        return (a.at(-1) > b.at(-1)) - (a.at(-1) < b.at(-1));
    })
}
// SOLUTION 2:
function last(x){
    return x.split(' ').sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
}

console.log(last('man i need a taxi up to ubud')) // ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']
console.log(last('what time are we climbing up the volcano')) // ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']
console.log(last('take me to semynak')) // ['take', 'me', 'semynak', 'to']