function findShort(s){
    let arr = s.split(' ').map(item => item.length)
    return Math.min(...arr);
}