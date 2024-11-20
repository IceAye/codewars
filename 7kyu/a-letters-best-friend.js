function bestFriend(txt, a, b) {
    let arr = txt.split('')
    let arrIndex = []
    let index = arr.indexOf(a)
    while (index !== -1) {
        arrIndex.push(index)
        index = arr.indexOf(a, index + 1)
    }

    let arrB = 0

    for (let i = 0; i < arrIndex.length; i++) {
        if (arr[arrIndex[i] + 1] === b) { arrB += 1}
    }

    return arrB === arrIndex.length
}

function bestFriend(txt, a, b) {
    for(let i = 0; i < txt.length; i++){
        if(txt[i] === a && txt[i + 1] !== b) return false
    }
    return true
}