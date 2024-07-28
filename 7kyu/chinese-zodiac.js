// ❓ DESCRIPTION:
// The Chinese zodiac is a repeating cycle of 12 years, with each year being represented by an animal and its reputed attributes.
// The lunar calendar is divided into cycles of 60 years each, and each year has a combination of an animal and an element.
// There are 12 animals and 5 elements; the animals change each year, and the elements change every 2 years.
// The current cycle was initiated in the year of 1984 which was the year of the Wood Rat.
//
// Since the current calendar is Gregorian, I will only be using years from the epoch 1924.
// For simplicity I am counting the year as a whole year and not from January/February to the end of the year.
//
// ##Task
// Given a year, return the element and animal that year represents ("Element Animal").
//
// ✅ SOLUTION:

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
console.log(chineseZodiac(1986));