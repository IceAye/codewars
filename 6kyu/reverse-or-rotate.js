function revrot(str, sz) {
    if (str === 0 || sz === 0 || str < sz) return "";
    let array = [];
    for (let i = 0; i < str.length; i += sz) {
        let chunk = str.slice(i, i + sz)
        if (chunk.length === sz) {
            let sum = [...chunk].reduce((acc, curr) => acc + +curr, 0)
            if (sum % 2 === 0) array.push([...chunk].reverse().join(""))
            if (sum % 2 === 1) array.push([...chunk].slice(1).join("") + [chunk.slice(0, 1)].join(""))
        }
    }
    return array.join("")
}

console.log(revrot("1234", 0));
console.log(revrot("1234", 5));
console.log(revrot("733049910872815764", 5));
console.log(revrot("123456987654", 6));