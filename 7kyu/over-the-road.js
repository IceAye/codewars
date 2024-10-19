// ❓ DESCRIPTION:
// You've just moved into a perfectly straight street with exactly n identical houses on either side of the road. Naturally, you would like to find out the house number of the people on the other side of the street. The street looks something like this:
//
// Street
// 1|   |6
// 3|   |4
// 5|   |2
//   you
// Evens increase on the right; odds decrease on the left. House numbers start at 1 and increase without gaps. When n = 3, 1 is opposite 6, 3 opposite 4, and 5 opposite 2.
// If you are timing out, running out of memory, or get any kind of "error", read on. Both n and address could get upto 500 billion with over 200 random tests. If you try to store the addresses of 500 billion houses in a list then you will run out of memory and the tests will crash. This is not a kata problem so please don't post an issue. Similarly if the tests don't complete within 12 seconds then you also fail.
//
// To solve this, you need to think of a way to do the kata without making massive lists or huge for loops. Read the discourse for some inspiration :)
//
// ✅ SOLUTION:
function overTheRoad(address, n){
    return n * 2 - address + 1;
}

// 📌 TESTCASE:
console.log(overTheRoad(1,3));
console.log(overTheRoad(3,3));
console.log(overTheRoad(2,3));
console.log(overTheRoad(3,5));
console.log(overTheRoad(7,11));
console.log(overTheRoad(23633656673,310027696726));