function makeString(s){
    return s.split(" ").reduce((acc, curr) => {
        acc += curr[0];
        return acc;
    }, "")
}

console.log(makeString("sees eyes xray yoat")) // "sexy"
console.log(makeString("brown eyes are nice")) // "bean"
console.log(makeString("cars are very nice")) // "cavn"
console.log(makeString("kaks de gan has a big head")) // "kdghabh"