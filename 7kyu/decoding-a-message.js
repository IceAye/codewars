function decode(message){
    const abc = '_zyxwvutsrqponmlkjihgfedcba';
    return message.split(' ').map(word => word.replace(/./g, char => abc[char.charCodeAt(0) - 96])).join(' ');
}

console.log(decode("sr"),"hi")
console.log(decode("svool"),"hello")
