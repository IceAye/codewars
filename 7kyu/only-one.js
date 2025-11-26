function onlyOne(...args) {
    return (args.filter(el => el === true)).length === 1;
}

console.log(onlyOne(true, false) == true, 'one true and one false')
console.log(onlyOne())
