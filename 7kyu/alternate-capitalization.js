function capitalize(s){
    let firstCap = ''
    let secondCap = ''
    for (let i = 0; i < s.length; i++)
        if (i === 0 || i % 2 === 0 ) {
            firstCap += s[i].toUpperCase()
            secondCap += s[i]
        } else {
            firstCap += s[i]
            secondCap += s[i].toUpperCase()
        }
    return [firstCap, secondCap]
}