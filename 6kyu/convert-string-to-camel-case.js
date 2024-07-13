function toCamelCase( str ) {
    let arr = str.replaceAll('_' , '-').split('-')
    let result = ''
    for (let i = 1; i < arr.length; i++) {
        result += arr[i][0].toUpperCase() + arr[i].slice(1)
    }
    return arr[0] + result
}