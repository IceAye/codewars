// ❓ DESCRIPTION:
// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.
// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).
//
// ✅ SOLUTION 1:
function dnaStrand(dna){
    let strand = '';
    for (let letter of dna) {
        if(letter === "A") {strand += "T"}
        if (letter ==="T") {strand += "A"}
        if (letter ==="C") {strand += "G"}
        if (letter ==="G") {strand += "C"}
    }
    return strand;
}

// ✅ SOLUTION 2:
let pairs = {'A':'T','T':'A','C':'G','G':'C'};

function DNAStrand(dna){
    return dna.split('').map(function(v){ return pairs[v] }).join('');
}

// 📌 TESTCASE:
console.log(dnaStrand("AAAA")) //"TTTT"
console.log(dnaStrand("ATTGC")) //"TAACG"
console.log(dnaStrand("GTAT")) //"CATA"
console.log(dnaStrand("AAGG")) //"TTCC"
console.log(dnaStrand("CGCG")) //"GCGC"
console.log(dnaStrand("ATTGC")) //"TAACG"