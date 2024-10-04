function partlist(arr) {
    let result = [];
    for (let i = 1; i < arr.length; i++) {
        result.push([arr.slice(0, i).join(" "), arr.slice(i).join(" ")]);
    }
    return result;
}

console.log(partlist(["I", "wish", "I", "hadn't", "come"]));
console.log(partlist(["cdIw", "tzIy", "xDu", "rThG"]));
console.log(partlist(["dOXj", "nMlK", "QGT", "LSt", "BHNR"]));
console.log(partlist(["CyAg", "zzWg", "ZZuR", "wbpx", "mYr"]));