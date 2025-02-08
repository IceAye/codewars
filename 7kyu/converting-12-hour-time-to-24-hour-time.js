function to24hourtime(hour, minute, period) {
    let result = "";
    if (period === "am") {
        if (hour < 10) {
            result += "0" + hour;
        } else if (hour === 12) {
            result += "00";
        } else result += hour;
    }
    if (period === "pm") {
        if (hour === 12) {
            result += 12;
        } else {
            result += hour + 12;
        }
    }
    if (minute < 10) {
        result += "0" + minute;
    } else {
        result += minute;
    }
    return result;
}

console.log(to24hourtime(1, 0, "am")); // "0100"
console.log(to24hourtime(1, 0, "pm")); // "1300"
console.log(to24hourtime(12, 0, "am")); // "0000"
console.log(to24hourtime(12, 0, "pm")); // "1200"
console.log(to24hourtime(6, 30, "am")); // "0630"
console.log(to24hourtime(9, 45, "pm")); // "2145"
