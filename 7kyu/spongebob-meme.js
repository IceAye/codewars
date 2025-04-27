function spongeMeme(sentence) {
    return sentence.replace(/./gi, (char, ind) => ind % 2 === 0 ? char.toUpperCase() : char.toLowerCase());
}

console.log(spongeMeme("stop Making spongebob Memes!", 'StOp mAkInG SpOnGeBoB MeMeS!'));