const howManyYears = function(date1, date2){
    return Math.abs(+date1.slice(0, 4) - +date2.slice(0, 4));
}

console.log(howManyYears('1997/10/10', '2015/10/10'), 18);
console.log(howManyYears('1990/10/10', '2015/10/10'), 25);
console.log(howManyYears('2015/10/10', '1990/10/10'), 25);
console.log(howManyYears('1992/10/24', '2015/10/24'), 23);
console.log(howManyYears('2018/10/10', '2000/10/10'), 18);