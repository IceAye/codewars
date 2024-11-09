function maskify(cc) {
    return cc.slice(0, -4).replaceAll(/[\w-]/gi, '#') + cc.slice(-4)
}

console.log(maskify('4556364607935616')) // '############5616'
console.log(maskify('1')) // '1'
console.log(maskify('11111')) // '#1111'