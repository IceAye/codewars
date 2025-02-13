function smallWordHelper(sentence){
    return sentence.split(' ').map(word => word.length <= 3 ? word.toUpperCase() : word.replace(/[euioa]/gi, "")).join(' ');
}

console.log(smallWordHelper("The quick brown fox jumps over the lazy dog")) // "THE qck brwn FOX jmps vr THE lzy DOG"
console.log(smallWordHelper("I'm just a small word from a small word family")) // "I'M jst A smll wrd frm A smll wrd fmly"