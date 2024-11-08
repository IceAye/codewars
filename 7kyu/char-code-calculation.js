function calc(x) {
    let number = [...x].map((item) => item.charCodeAt(0)).join("")
    let total1 = Array.from(number, Number).reduce((acc, curr) => acc + curr, 0);
    let total2 = Array.from(number.replace(/7/g, "1"), Number).reduce((acc, curr) => acc + curr, 0);
    return total1 - total2;
}

console.log(calc('abcdef')) // 6
console.log(calc('ifkhchlhfd')) // 6
console.log(calc('aaaaaddddr')) // 30
console.log(calc('jfmgklf8hglbe')) // 6
console.log(calc('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')) // 96
