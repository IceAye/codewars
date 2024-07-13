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