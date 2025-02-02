function unscrambleEggs(word) {
    return word.replace(/egg/g, "");
}

console.log(unscrambleEggs("ceggodegge heggeregge")); //  "code here"
console.log(unscrambleEggs("FeggUNegg KeggATeggA")); // "FUN KATA"