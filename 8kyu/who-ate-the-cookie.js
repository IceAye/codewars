function cookie(x){
    return `Who ate the last cookie? It was ${typeof x === "string" ? "Zack" : typeof x === "number" ? "Monica" : "dog"}!`
}

console.log(cookie("Ryan"));
console.log(cookie(26));
console.log(cookie(true));
