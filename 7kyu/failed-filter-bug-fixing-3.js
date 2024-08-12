let FilterNumbers = function(str) {
    return str.split('').filter(c => isNaN(c)).join('');
}

console.log(FilterNumbers("test123"));
console.log(FilterNumbers("a1b2c3"));
console.log(FilterNumbers("aa1bb2cc3dd0"));
console.log(FilterNumbers('beecdead0fddaebd0'));
