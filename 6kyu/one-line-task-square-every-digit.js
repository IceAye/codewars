// ❓ DESCRIPTION:
// Inspired by Square Every Digit (and by the inimitable myjinxin2015's many clever one-line kata),
// your goal here is precisely the same (to square every digit in the given number), in 36 or fewer characters (JavaScript),
// or 47 or fewer in Ruby
// (Note: in Ruby, spaces do not count towards your total-- within reason.
// Spacing shouldn't be more than 30% of your total to avoid possible cheats).
// Your return value should be in integer format.
// Your input will always be a valid, non-negative integer... no tricks!
// Bonus: Can you get it down to 34 characters? (43 in Ruby!)
// Note: Just as a head's up, numbers are > 2^31, so bitwise operators aren't viable.
//
// ✅ SOLUTION:
sd=x=>+(x+'').replace(/./g,i=>i*i)

console.log(sd(3212))