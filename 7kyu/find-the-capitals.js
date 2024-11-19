let capitals = function ( word ) {
    let result = []

    for (let i = 0; i < word.length; i++) {
        if (word.at(i).match(/[A-Z]/g)) {
            result.push(i)
        }
    }
    return result
};