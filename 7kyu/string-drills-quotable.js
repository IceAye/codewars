// ❓ DESCRIPTION:
// This function should take two string parameters: a person's name (name) and a quote of theirs (quote),
// and return a string attributing the quote to the person in the following format:
// '[name] said: "[quote]"'
//
// ✅ SOLUTION:
function quotable(name, quote){
    return `${name} said: "${quote}"`
}
console.log('Output: ' , quotable('Grae', 'Practice makes perfect'))
console.log('Output: ' , quotable('Dan', 'Get back to work, Grae'))