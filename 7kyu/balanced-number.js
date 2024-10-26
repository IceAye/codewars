function balancedNum(number) {
    let index = Math.ceil([...String(number)].length / 2) - 1
    let start = Array.from(String(number), Number).slice(0, index).reduce((acc, curr) => acc + curr, 0)
    let end = Array.from(String(number), Number).slice(-index).reduce((acc, curr) => acc + curr, 0)
    return [...String(number)].length < 3 || start === end ? "Balanced" : "Not Balanced";
}

console.log(balancedNum(7)) // 'Balanced'
console.log(balancedNum(959)) // 'Balanced'
console.log(balancedNum(13)) // 'Balanced'
console.log(balancedNum(432)) // 'Not Balanced'
console.log(balancedNum(424)) // 'Balanced'
console.log(balancedNum(1024)) // 'Not Balanced'
console.log(balancedNum(66545)) // 'Not Balanced'
console.log(balancedNum(295591)) // 'Not Balanced'
console.log(balancedNum(1230987)) // 'Not Balanced'
console.log(balancedNum(56239814)) // 'Balanced'
