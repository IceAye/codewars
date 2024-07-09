function alphabetPosition( text ) {
    return text.toLowerCase()
        .split('')
        .filter(letter => /[a-z]/gi.test(letter))
        .map(letter => letter.charCodeAt(0) - 96).join(' ');
}