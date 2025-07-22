function fizzBuzzCuckooClock(time) {
    if (time.endsWith('00')) {
        const repetition = [];

        let i = 0;
        const finish = parseInt(time) > 12 ? parseInt(time) - 12 : parseInt(time) === 12 || parseInt(time) === 0 ? 12: parseInt(time);
        while (i < finish) {
            repetition.push('Cuckoo');
            i++;
        }

        return repetition.join(' ');
    }

    if (time.endsWith('15') || time.endsWith('45')) {
        return 'Fizz Buzz';
    }

    if (time.endsWith('30')) {
        return 'Cuckoo';
    }
    if (time.slice(-2) % 3 === 0) {
        return 'Fizz';
    }

    if (time.slice(-2) % 5 === 0) {
        return 'Buzz';
    }

    return 'tick';
}

console.log(fizzBuzzCuckooClock('13:34'), 'tick');
console.log(fizzBuzzCuckooClock('21:00'),'Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo');
console.log(fizzBuzzCuckooClock('11:15'), 'Fizz Buzz');
console.log(fizzBuzzCuckooClock('03:03'), 'Fizz');
console.log(fizzBuzzCuckooClock('14:30'), 'Cuckoo');
console.log(fizzBuzzCuckooClock('08:55'), 'Buzz');
console.log(fizzBuzzCuckooClock('00:00'), 'Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo');
console.log(fizzBuzzCuckooClock('12:00'), 'Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo');
