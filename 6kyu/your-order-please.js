function order(words){
    return words.split(' ')
        .sort((a,b) => a.match(/\d/) - b.match(/\d/))
        .join(' ')
}

console.log(order("is2 Thi1s T4est 3a"))
console.log(order("4of Fo1r pe6ople g3ood th5e the2"))
console.log(order(""))
console.log(order("3 6 4 2 8 7 5 1 9"))