function yearDays(year) {
    let zeroCenture = /00/g.test(year);
    return `${year} has ${year % 400 === 0 || !zeroCenture && year % 4 === 0 ? 366 : 365} days`;
}

console.log(yearDays(0));
console.log(yearDays(-64));
console.log(yearDays(2016));
console.log(yearDays(1974));
console.log(yearDays(-10));
console.log(yearDays(1000));
console.log(yearDays(1600));