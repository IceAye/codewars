function triangle(row) {
    while (row.length > 1) {
        let string = "";
        for (let i = 0; i < row.length - 1; i++) {
            if (row[i] === row[i + 1]) string += row[i];
            if (/BR|RB/g.test(row[i] + row[i + 1])) string += "G";
            if (/BG|GB/g.test(row[i] + row[i + 1])) string += "R";
            if (/RG|GR/g.test(row[i] + row[i + 1])) string += "B";
        }
        row = string;
    }

    return row.length === 1 ? row : triangle(row);
}

console.log(triangle('GB'), 'R');
console.log(triangle('RRR'), 'R');
console.log(triangle('RGBG'), 'B');
console.log(triangle('RBRGBRB'), 'G');
console.log(triangle('RBRGBRBGGRRRBGBBBGG'), 'G');
console.log(triangle('B'), 'B');