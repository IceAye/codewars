const seqlist = function(first,c,l){
    let result = [];

    for (let i = first; result.length < l; i += c) {
        result.push(i);
    }
    return result;
}

console.log(seqlist(0,1,20)) // [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
