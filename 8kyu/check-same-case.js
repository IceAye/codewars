function sameCase( a , b ) {
    if (!a.match(/[A-Za-z]/g) || !b.match(/[A-Za-z]/g)) {
        return -1
    } else if ((a.match(/[A-Z]/g) && b.match(/[A-Z]/g)) || a.match(/[a-z]/g) && b.match(/[a-z]/g)) {
        return 1
    } else
        return 0
}

console.log(sameCase( 'C', 'B'))
console.log(sameCase( 'b', 's'))
console.log(sameCase( 'A', 's'))