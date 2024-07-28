const animals = [
    "Rat",
    "Ox",
    "Tiger",
    "Rabbit",
    "Dragon",
    "Snake",
    "Horse",
    "Goat",
    "Monkey",
    "Rooster",
    "Dog",
    "Pig",
];

const elements = ["Wood", "Fire", "Earth", "Metal", "Water"];
function chineseZodiac(year) {
    let point = year - 1924;

    let currentAnimal = animals[point % 12];
    let currentYear = elements[Math.floor((point % 10) / 2)];

    return `${currentYear} ${currentAnimal}`;
}

console.log(chineseZodiac(1965));
console.log(chineseZodiac(1938));
console.log(chineseZodiac(1998));
console.log(chineseZodiac(2016));
console.log(chineseZodiac(1924));
console.log(chineseZodiac(1968));