function countSmileys(arr) {
    let sum = 0
    for (const smile of arr) {
        /(:|;)(~|-)?(\)|D)/g.test(smile) ? sum++ : sum
    }
    return sum
}

console.log(countSmileys([':D',':~)',';~D',':)']))
console.log(countSmileys([':)',':(',':D',':O',':;']))