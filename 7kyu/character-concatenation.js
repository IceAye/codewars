function charConcat(string){
    let middle = Math.floor(string.length / 2);
    let result = '';

    for (let i = 0; i < middle; i++) {
        result += string[i] + string.at(-1 - i) + (i + 1);
    }
    return result;
}

console.log(charConcat("abc def")) // 'af1be2cd3'
console.log(charConcat("CodeWars")) // 'Cs1or2da3eW4'
