function spinWords( string ) {
    let allArrays = string.split(' ')
    let array = []
    for (let i = 0; i < allArrays.length; i++) {
        (allArrays[i].length < 5) ? array.push(allArrays[i]) :
            array.push(allArrays[i].split('').reverse().join(''))
    }
    return array.join(" ")
}