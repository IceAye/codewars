// ❓ DESCRIPTION:
// John wants to decorate the walls of a room with wallpaper. He wants a fool-proof method for getting it right.
// John knows that the rectangular room has a length of l meters, a width of w meters, a height of h meters. The
// standard width of the rolls he wants to buy is 52 centimeters. The length of a roll is 10 meters. He bears in mind
// however, that it’s best to have an extra length of wallpaper handy in case of mistakes or miscalculations so he
// wants to buy a length 15% greater than the one he needs.
// Last time he did these calculations he got a headache, so could you help John?
// Task Your function wallpaper(l, w, h) should return as a plain English word in lower case the
// number of rolls he must buy.  Notes: all rolls (even with incomplete width) are put edge to edge  0 <= l, w, h
// (floating numbers); it can happens that w * h * l is zero  the integer r (number of rolls) will always be less or
// equal to 20  FORTH: the number of rolls will be a positive or null integer (not a plain English word; this number
// can be greater than 20)
//
// ✅ SOLUTION:
numbers = [
    "zero" , "one" , "two" , "three" , "four" , "five" ,
    "six" , "seven" , "eight" , "nine" , "ten" ,
    "eleven" , "twelve" , "thirteen" , "fourteen" , "fifteen" ,
    "sixteen" , "seventeen" , "eighteen" , "nineteen" , "twenty" ,
];

function wallpaper(l , w , h) {
    if (l === 0 || w === 0 || h === 0) return numbers[0];

    let plain = 2 * (w * h) + 2 * (l * h);
    let required = plain * 0.15 + plain;
    let wallpaper = 0.52 * 10;
    let final = Math.ceil(required / wallpaper);
    return numbers[final];
}

// 📌 TESTCASE:
console.log(wallpaper(6.3 , 4.5 , 3.29)) // "sixteen"
console.log(wallpaper(7.8 , 2.9 , 3.29)) // "sixteen"
console.log(wallpaper(6.3 , 5.8 , 3.13)) // "seventeen"
console.log(wallpaper(6.1 , 6.7 , 2.81)) // "sixteen"
console.log(wallpaper(0 , 5.6 , 3.2)) // "zero"
