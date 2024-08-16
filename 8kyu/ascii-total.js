function uniTotal(string) {
    return [...string].reduce((sum, item) => sum + item.charCodeAt(0), 0);
}

console.log(uniTotal(""));
console.log(uniTotal("a"));
console.log(uniTotal("aaa"));
console.log(uniTotal("Mary Had A Little Lamb"));
