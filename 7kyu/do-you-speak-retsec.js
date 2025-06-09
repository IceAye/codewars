function reverseByCenter(s){
    const middle = Math.floor(s.length / 2);
    return s.slice(-middle) + (s.length % 2 === 0 ? '' : s[middle]) + s.slice(0, middle);
}

console.log(reverseByCenter("secret"), "retsec")
console.log(reverseByCenter("agent"), "nteag")
console.log(reverseByCenter("raw"), "war")
console.log(reverseByCenter("onion"), "onion")