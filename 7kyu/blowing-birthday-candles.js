// ❓ DESCRIPTION:
// Today is the special day you've been waiting for — it's your birthday! It's 8 AM and you're setting up your birthday cake for the party. It's time to put the candles on top.
//
// You take out all the candles you've bought. As you are about to put them on the cake, you just realize that there are numbers on each candles. What are these numbers?! After searching about it on the internet, turns out these are special candles. These candles need to be blown a certain number of times before they're finally extinguished, and those numbers on the candles are the required times to blow them.
//
// Being one who plans meticulously, you want to determine the total number of blows you need to extinguish all the candles once you've put them on the cake.
//
// Task
// Given a string containing digits (representing the strength of the candles), calculate the number of blows you need to extinguish all the candles.
//
// Starting at the beginning of the string, each blow can only reach 3 candles, reducing their strength by one each. You can only reach more candles once those directly in front of you are extinguished.
//
// ✅ SOLUTION:
function blowCandles( str ) {
    let arr = str.split('').map(( item ) => +item);
    let count = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            count += arr[i]
            arr[i + 1] -= arr[i]
            arr[i + 2] -= arr[i]
        }
    }

    return count
}