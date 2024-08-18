function howManydays(month) {
    let days;
    switch (month) {
        case 2:
            days = 28;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            days = 30;
            break;
        default:
            days = 31;
    }
    return days;
}

console.log(howManydays(1));
console.log(howManydays(2));
console.log(howManydays(3));
console.log(howManydays(4));
console.log(howManydays(11));
console.log(howManydays(12));
