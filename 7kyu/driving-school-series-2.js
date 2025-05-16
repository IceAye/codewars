function cost (mins) {
    return mins <= 65 ? 30 : 30 + Math.ceil((mins - 65) / 30) * 10;
}


console.log(cost(45),30);
console.log(cost(63),30);
console.log(cost(84),40);
console.log(cost(102),50);
console.log(cost(273),100);