const days = {
    1: "Sunday",
    2: "Monday",
    3: "Tuesday",
    4: "Wednesday",
    5: "Thursday",
    6: "Friday",
    7: "Saturday"
}
function whatday( num ) {
    return days[num] || "Wrong, please enter a number between 1 and 7"
}

console.log(whatday(1))
console.log(whatday(3))
console.log(whatday(8))