// ❓ DESCRIPTION:
// Remember the spongebob meme that is meant to make fun of people by repeating what they say in a mocking way?
// "Dont use that weird spongebob mocking meme" Me: DonT uSe thAt WeIrd SpoNgEboB MoCkinG MEme
// You need to create a function that converts the input into this format, with the output being the same string expect there is a pattern of uppercase and lowercase letters.
//
// ✅ SOLUTION:
function spongeMeme(sentence) {
    return sentence.replace(/./gi, (char, ind) => ind % 2 === 0 ? char.toUpperCase() : char.toLowerCase());
}

// ❓ TESTCASE:
console.log(spongeMeme("stop Making spongebob Memes!", 'StOp mAkInG SpOnGeBoB MeMeS!'));