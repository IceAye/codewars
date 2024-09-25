function cutIt(arr){
    let min = Math.min(...arr.map(item => item.length))
    return arr.map(item => item.slice(0, min));
}

console.log(cutIt(["ab","cde","fgh"]))
console.log(cutIt(["abc","defgh","ijklmn"]))
console.log(cutIt(["codewars","javascript","java"]))