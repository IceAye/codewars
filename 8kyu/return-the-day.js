const days = {
    "1": "Monday",
    "2": "Tuesday",
    "3": "Wednesday",
    "4": "Thursday",
    "5": "Friday",
    "6": "Saturday",
    "7": "Sunday"
}

function whatday( num ) {
    return days[num] || "Wrong, please enter a number between 1 and 7"
}

console.log(whatday(1))
console.log(whatday(3))
console.log(whatday(8))