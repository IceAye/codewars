let number = function(array){
    let result = []
    for (let i = 0; i < array.length; i++) {
        result.push(`${i +1}: ${array[i]}` )
    }
    return result
}