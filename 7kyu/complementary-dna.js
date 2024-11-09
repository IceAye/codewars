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