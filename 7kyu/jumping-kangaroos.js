function kangaroo(kanga1, rate1, kanga2, rate2) {
    let speed = rate2 - rate1;
    let distance = kanga2 - kanga1;
    if ((kanga2 > kanga1 && rate2 >= rate1) || (kanga1 > kanga2 && rate1 >= rate2)) return false;
    return distance % speed === 0;
}

console.log(kangaroo(0, 3, 4, 2), true);
console.log(kangaroo(0, 9, 16, 4), false);
console.log(kangaroo(0, 2, 5, 3), false);
console.log(kangaroo(1571, 4240, 9023, 4234), true);
console.log(kangaroo(-1571, 4240, 9023, 4234), false);
console.log(kangaroo(-7855, 4240, 9023, 4234), true);
console.log(kangaroo(43, 5, 49, 3), true);
console.log(kangaroo(9023, 4240, 1571, 4234), false);
console.log(kangaroo(129, 15, 147, 9), true);
console.log(kangaroo(129, 15, 147, 90), false);
console.log(kangaroo(0, 2, 100000, 1), true);
console.log(kangaroo(72893, 11125, 24432, 4202), false);
console.log(kangaroo(13613, 299, 65130, 73), false);
