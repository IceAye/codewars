function calculateAge(born, year) {
    let count = Math.abs(year - born);
    let yearNoun = count === 1 ? "year" : "years";

    if (count === 0) return "You were born this very year!";
    return `You ${born < year ? "are" : "will be born in"} ${count} ${yearNoun}${born < year ? " old" : ""}.`;
}

console.log(calculateAge(2012, 2016));
console.log(calculateAge(1989, 2016));
console.log(calculateAge(2000, 1990));
console.log(calculateAge(3400, 3400));
console.log(calculateAge(3400, 3399));
console.log(calculateAge(2011, 2012));