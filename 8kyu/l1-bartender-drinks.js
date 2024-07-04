// ❓ DESCRIPTION:
// Complete the function that receives as input a string, and produces outputs according to the following table
// Note: anything else is the default case: if the input to the function is not any of the values in the table,
// then the return value should be "Beer".
// Make sure you cover the cases where certain words do not show up with correct capitalization.
// For example, the input "pOLitiCIaN" should still return "Your tax dollars".
//
// ✅ SOLUTION:
function getDrinkByProfession(param){
    switch (param.toLowerCase()) {
        case 'jabroni':
            return 'Patron Tequila'
        case 'school counselor':
            return 'Anything with Alcohol'
        case 'programmer':
            return 'Hipster Craft Beer'
        case 'bike gang member':
            return 'Moonshine'
        case 'politician':
            return 'Your tax dollars'
        case 'rapper':
            return 'Cristal'
        default:
            return 'Beer'
    }
}

console.log('Output: ' , getDrinkByProfession("jabrOni"))
console.log('Output: ' , getDrinkByProfession("scHOOl counselor"))
console.log('Output: ' , getDrinkByProfession("pundit"))