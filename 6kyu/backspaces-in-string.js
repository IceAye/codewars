function cleanString(s) {
    return [...s].reduce((acc, curr) => {
        curr === "#" ? acc.pop() : acc.push(curr);
        return acc;
    }, []).join("");
}

console.log(cleanString('abc#d##c'));
console.log(cleanString('abc####d##c#'));
console.log(cleanString(""));
console.log(cleanString("#######"));
