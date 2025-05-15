function nerdify(txt) {
    let string = "";
    for (const char of txt) {
        if (/a/i.test(char)) {
            string += "4";
        } else if (/e/i.test(char)) {
            string += "3";
        } else if (/l/.test(char)) {
            string += "1";
        } else string += char;
    }
    return string;
}

console.log(nerdify("Fund4m3nt41s"), "Fund4m3nt41s");
console.log(nerdify("Seven"), "S3v3n");
console.log(nerdify("Los Angeles"), "Los 4ng313s");
console.log(nerdify("Seoijselawuue"), "S3oijs314wuu3");
