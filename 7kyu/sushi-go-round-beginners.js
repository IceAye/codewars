function totalBill(str) {
    let strLength = str.replace(/ /g, "").length;
    return strLength * 2 - Math.floor(strLength / 5) * 2;
}

console.log(totalBill("rr")); // 4
console.log(totalBill("rr rrr")); // 8
console.log(totalBill("rr rrr rrr rr")); // 16
console.log(totalBill("rrrrrrrrrrrrrrrrrr   rr r")); // 34
console.log(totalBill("")); // 0
console.log(totalBill("rrrrrrrrr")); // 16