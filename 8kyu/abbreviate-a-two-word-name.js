function abbrevName( name ) {
    let fullName = name.toUpperCase().split(' ');
    return fullName[0][0] + '.' + fullName[1][0];
}

console.log(abbrevName("Sam Harris"))
console.log(abbrevName("george clooney"))