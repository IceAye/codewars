function driver(data) {
    let part1 = (data[2].slice(0, 5).toUpperCase()).padEnd(5, '9');
    let part2 = data[3][data[3].length - 2];

    let birth = data[3].split("-");
    let date = new Date(`${birth[1]} ${birth[0]}, ${birth[2]}`);
    let month = String(date.getMonth() + 1).padStart(2, "0")

    let part3 = data[4] === "M" ? month : +month[0] + 5 + month[1];
    let part4 = birth[0];

    let part5 = data[3][data[3].length - 1];

    let part6 = (data[0][0] + (data[1][0] || "")).padEnd(2, "9");

    return part1 + part2 + part3 + part4 + part5 + part6 + "9AA"
}

console.log(driver(["John","James","Smith","01-Jan-2000","M"]), "SMITH001010JJ9AA")
console.log(driver(["Johanna","","Gibbs","13-Dec-1981","F"]), "GIBBS862131J99AA")
console.log(driver(["Andrew","Robert","Lee","02-September-1981","M"]), "LEE99809021AR9AA")