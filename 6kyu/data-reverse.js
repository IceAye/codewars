// ❓ DESCRIPTION:
// A stream of data is received and needs to be reversed.
// Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:
// 11111111  00000000  00001111  10101010
//  (byte1)   (byte2)   (byte3)   (byte4)
// should become:
// 10101010  00001111  00000000  11111111
//  (byte4)   (byte3)   (byte2)   (byte1)
// The total number of bits will always be a multiple of 8.
//
// ✅ SOLUTION 1:
function dataReverse(data) {
    return data.length === 0
        ? 0
        : Array.from(
            data
                .join("")
                .match(/.{1,8}/g)
                .reverse()
                .join(""),
            Number,
        );
}

// ✅ SOLUTION 2:
function dataReverse(data) {
    let result = [];
    while (data.length > 0) {
        result.push(...data.splice(-8));
    }
    return result;
}

// 📌 TESTCASE:
console.log(
    dataReverse([
        1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1,
        0, 1, 0, 1, 0, 1, 0,
    ]),
);
