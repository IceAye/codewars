function hammingWeight(x){
    let str = '';
    for (let i = x; i > 0; i = Math.trunc(i / 2)) {
        str = (i % 2) + str;
    }
    return str ? str.match(/1/g).length : 0;
}