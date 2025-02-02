function unscrambleEggs(word) {
    return word.replace(/egg/g, "");
}

function unscrambleEggs(word) {
    return word.split('egg').join('');
}

console.log(unscrambleEggs("ceggodegge heggeregge")); //  "code here"
console.log(unscrambleEggs("FeggUNegg KeggATeggA")); // "FUN KATA"