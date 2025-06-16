function mod256WithoutMod(number) {
    let abs = Math.abs(number);
    let remain = Math.floor(abs / 256) * 256 - abs;
    return Math.sign(number) * -remain;
}

console.log(mod256WithoutMod(254), 254);
console.log(mod256WithoutMod(256), 0);
console.log(mod256WithoutMod(258), 2);
console.log(mod256WithoutMod(-254), -254);
console.log(mod256WithoutMod(-256), 0);
console.log(mod256WithoutMod(-258), -2);
