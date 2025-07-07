// ❓ DESCRIPTION:
// Write a function that will randomly upper and lower characters in a string - randomCase() (random_case() for Python).
//
// A few examples:
//
// randomCase("Lorem ipsum dolor sit amet, consectetur adipiscing elit") == "lOReM ipSum DOloR SiT AmeT, cOnsEcTEtuR aDiPiSciNG eLIt"
//
// randomCase("Donec eleifend cursus lobortis") == "DONeC ElEifEnD CuRsuS LoBoRTIs"
// Notes:
//
// This function will work within the basic ASCII character set to make this kata easier - so no need to make the function multibyte safe.
//
// The letters MUST be selected randomly - filters are set to make sure there is no cheating!

// ✅ SOLUTION:
function randomCase(x) {

    function toRandomLetter (char) {
        const condition = Math.floor(Math.random() * 10);
        return condition > 5 ? char.toUpperCase() : char.toLowerCase();
    }

    return x.split(' ').map(word => [...word].map(char => toRandomLetter(char)).join('')).join(' ');
}

// 📌 TESTCASE:
console.log(randomCase("Lorem ipsum dolor sit amet, consectetur adipiscing elit"))
console.log(randomCase("Donec eleifend cursus lobortis"))
console.log(randomCase("THIS IS AN ALL CAPS STRING"))