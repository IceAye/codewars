function sqInRect(lng, wdth) {
    if (lng === wdth) return null;
    let result = [];
    while (lng > 0 && wdth > 0) {
        result.push(lng > wdth ? wdth : lng);
        lng > wdth ? (lng -= wdth) : (wdth -= lng);
    }
    return result;
}

console.log(sqInRect(5, 5));
console.log(sqInRect(5, 3));
console.log(sqInRect(3, 5));
console.log(sqInRect(20, 14));
