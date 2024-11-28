function change(string){
    const abc = 'abcdefghijklmnopqrstuvwxyz';
    const result = new Array(26).fill(0)
    let letters = string.toLowerCase().replace(/\W/gi, '');
    for (const letter of letters) {
        result[abc.indexOf(letter)] = 1
    }
    return result.join('');
}


console.log(change("a **&  bZ")) // "11000000000000000000000001"
