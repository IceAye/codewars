// ❓ DESCRIPTION:
// You can print your name on a billboard ad. Find out how much it will cost you.
// Each character has a default price of £30,
// but that can be different if you are given 2 parameters instead of 1 (allways 2 for Java).
//
// You can not use multiplier "*" operator.
//
// ✅ SOLUTION:
function billboard(name, price = 30){
    return name.length / (1 / price)
}
console.log('Output: ' , billboard("Jeong-Ho Aristotelis"))
console.log('Output: ' , billboard("Abishai Charalampos"))
console.log('Output: ' , billboard("Idwal Augustin"))