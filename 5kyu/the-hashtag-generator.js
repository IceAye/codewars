function generateHashtag (str) {
    if (str === '') return false
    let array = str.split(' ')
    for (let i = 0; i < array.length; i++) {
        array[i] = String(array[i].at(0)).toUpperCase() + array[i].slice(1)
    }
    let result = "#" + array.join('')

    return (result.length > 140) ? false : result
}