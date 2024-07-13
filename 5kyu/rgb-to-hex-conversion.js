// ❓ DESCRIPTION:
// The rgb function is incomplete.
// Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned.
// Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.
// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.
//
// 📌 Examples (input --> output):
// 255, 255, 255 --> "FFFFFF"
// 255, 255, 300 --> "FFFFFF"
//
// ✅ SOLUTION:

function hex( x ) {
    if (x > 255) {
        x = 255
    }
    if (x < 0) {
        x = 0
    }
    let color = x.toString(16).toUpperCase()
    return color.length === 1 ? '0' + color : color
}

function rgb( r , g , b ) {
    return hex(r) + hex(g) + hex(b)
}

console.log('Output: ' , rgb( 300, 255, 255 ))
console.log('Output: ' , rgb( 173, 255,  47 ))