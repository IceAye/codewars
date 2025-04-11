const CHANGE = {
    penny: 0.01,
    nickel: 0.05,
    dime: 0.1,
    quarter: 0.25,
    dollar: 1.0,
};

function changeCount(change) {
    return '$' + change.split(' ').reduce((acc, curr) => acc + CHANGE[curr], 0).toFixed(2);
}

console.log(changeCount('dime penny dollar')) // '$1.11'
console.log(changeCount('dime penny nickel')) // '$0.16'
console.log(changeCount('quarter quarter')) // '$0.50'
console.log(changeCount('dollar penny dollar')) // '$2.01'
console.log(changeCount('dollar dollar dollar dollar dollar dollar dollar dollar dollar dollar penny')) // '$10.01'