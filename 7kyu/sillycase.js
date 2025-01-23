function sillycase(silly) {
    let midpoint = Math.ceil(silly.length / 2);
    return silly.slice(0, midpoint).toLowerCase() + silly.slice(midpoint).toUpperCase();
}

console.log(sillycase("foobar")); // "fooBAR"
console.log(sillycase("codewars")); // "codeWARS"
console.log(sillycase("brian")); // 'briAN'