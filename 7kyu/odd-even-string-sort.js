function sortMyString(S) {
    return [...S].reduce((acc, curr, currentIndex) => {
        acc[currentIndex % 2] += curr;
        return acc;
    }, ["", ""]).join(" ")
}

console.log(sortMyString("CodeWars"));
console.log(sortMyString("YCOLUE'VREER"));
