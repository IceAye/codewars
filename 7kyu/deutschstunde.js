function derDieDas(wort){
    const quantity = (wort.match(/[aeiouäöü]/gi) || '').length;
    return (quantity < 2 ? "das " : quantity > 3 ? "der " : "die ") + wort;
}

console.log(derDieDas('OOOpa'));
console.log(derDieDas('Suppenhuhn'));
console.log(derDieDas('Geheimdienst'));
console.log(derDieDas('Ofenkartoffel'));
console.log(derDieDas('Fisch'));
console.log(derDieDas('Knödel'));
console.log(derDieDas('Leberkaassemmi'));
console.log(derDieDas(''));