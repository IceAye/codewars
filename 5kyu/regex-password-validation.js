const REGEXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9]{6,}$/;


function doTest (string) {
    console.log(REGEXP.test(string))

}

doTest('fjd3IR9') // true
doTest('ghdfj32') // false
doTest('DSJKHD23') // false
doTest('dsF43') // false
doTest('4fdg5Fj3') // true
doTest('DHSJdhjsU') // false
doTest('fjd3IR9.;') // false
doTest('fjd3  IR9') // false
doTest('djI38D55') // true
doTest('djI3_8D55') // false
doTest('djI38D55@@') // false