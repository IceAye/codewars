function convertBits(a, b){
    return (a ^ b).toString(2).replace(/0/g, "").length;
}

console.log(convertBits(31,14)) // 2