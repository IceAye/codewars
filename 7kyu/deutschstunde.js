// ❓ DESCRIPTION:
// Everybody knows a little german, right? But remembering the correct articles is a tough job. Write yourself a little helper, that returns the noun with the matching article:
// each noun containing less than 2 vowels has the article "das"
// each noun containing 2/3 vowels has the article "die"
// each noun containing more than 3 vowels has the article "der"
// Caution: Vowels are "a,e,i,o,u". Umlaute (ä ö ü) are also being counted!
//
// (This Kata is a joke, there is no such grammar rule!)

// ✅ SOLUTION:
function derDieDas(wort){
    const quantity = (wort.match(/[aeiouäöü]/gi) || '').length;
    return (quantity < 2 ? "das " : quantity > 3 ? "der " : "die ") + wort;
}

// 📌 DESCRIPTION:
console.log(derDieDas('OOOpa'));
console.log(derDieDas('Suppenhuhn'));
console.log(derDieDas('Geheimdienst'));
console.log(derDieDas('Ofenkartoffel'));
console.log(derDieDas('Fisch'));
console.log(derDieDas('Knödel'));
console.log(derDieDas('Leberkaassemmi'));
console.log(derDieDas(''));