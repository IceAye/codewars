function validateTime(time) {
    return /^(0?[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/gi.test(time);
}


console.log(validateTime('01:00'), true);
console.log(validateTime('1:00'), true);
console.log(validateTime('1:00'), true);
console.log(validateTime('00:00'), true);
console.log(validateTime('13:1'), false);
console.log(validateTime('12:60'), false);
console.log(validateTime('12: 60'), false);
console.log(validateTime('24:00'), false);
console.log(validateTime('24o:00'), false);
console.log(validateTime('24:000'), false);
console.log(validateTime(''), false);
console.log(validateTime('2400'), false);
console.log(validateTime('foo12:00bar'), false);
console.log(validateTime('010:00'), false);
console.log(validateTime('1;00'), false);
