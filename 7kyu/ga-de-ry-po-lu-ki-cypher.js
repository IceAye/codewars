const encryptionString = 'gGaAdDeErRyYpPoOlLuUkKiI';
const decryptionString = 'aAgGeEdDyYrRoOpPuUlLiIkK';

function encode(str) {
    return str.replace(/\w/g, char => encryptionString[decryptionString.indexOf(char)] || char);
}

function decode(str) {
    return str.replace(/\w/g, char => decryptionString[encryptionString.indexOf(char)] || char);;
}


console.log( encode("Ala has a cat") , "Gug hgs g cgt" );
console.log( decode("Gug hgs g cgt") , "Ala has a cat" );
console.log( encode("ABCD") , "GBCE" );
console.log( encode("gaderypoluki") , "agedyropulik" );
console.log( decode("agedyropulik") , "gaderypoluki" );
console.log( decode("GBCE") , "ABCD" );