function catMouse(x){
    return x.indexOf("m") <= 4  ? "Caught!" : "Escaped!";
}

console.log(catMouse('C....m')) // "Escaped!"
console.log(catMouse('C..m')) // "Caught!"
console.log(catMouse('C.....m')) // "Escaped!"