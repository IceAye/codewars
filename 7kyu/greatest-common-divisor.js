function mygcd(x,y){
    return y === 0 ? x : mygcd(y, x % y)
}


console.log(mygcd(30, 12)) // 6
console.log(mygcd(36, 12)) // 12
console.log(mygcd( 8,  9)) //  1
console.log(mygcd( 1,  1)) //  1