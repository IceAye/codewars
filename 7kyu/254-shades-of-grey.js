function shadesOfGrey(n){
    const colorRange = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    let result = [];
    if (n < 1) return [];
    for (let i = 0; i < colorRange.length; i++) {
        for (let j = 0; j < colorRange.length; j++) {
            let string = '#' + String(colorRange[i] + colorRange[j]).repeat(3)
            if (string !== '#000000' && string !== '#ffffff' && result.length < n && result.length < 254 ) {
                result.push(string);
            }
        }
    }
    return result;
}

console.log(shadesOfGrey(-2), []);
console.log(shadesOfGrey(-1), []);
console.log(shadesOfGrey(0), []);
console.log(shadesOfGrey(1), ["#010101"]);
console.log(shadesOfGrey(2), ["#010101", "#020202"]);
console.log(shadesOfGrey(3), ["#010101","#020202", "#030303"]);
console.log(shadesOfGrey(4), ["#010101", "#020202", "#030303", "#040404"]);
console.log(shadesOfGrey(5), ["#010101", "#020202", "#030303", "#040404", "#050505"]);
console.log(shadesOfGrey(6), ["#010101", "#020202", "#030303", "#040404", "#050505", "#060606"]);
console.log(shadesOfGrey(7), ["#010101", "#020202", "#030303", "#040404", "#050505", "#060606", "#070707"]);
console.log(shadesOfGrey(8), ["#010101", "#020202", "#030303", "#040404", "#050505", "#060606", "#070707", "#080808"]);
console.log(shadesOfGrey(9), ["#010101", "#020202", "#030303", "#040404", "#050505", "#060606", "#070707", "#080808", "#090909"]);
console.log(shadesOfGrey(10), ["#010101", "#020202", "#030303", "#040404", "#050505", "#060606", "#070707", "#080808", "#090909", "#0a0a0a"]);
