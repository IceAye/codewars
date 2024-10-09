function correct( string ) {
    return string
        .split('')
        .map(letter => letter === "0" ? "O" : letter === "1" ? "I" : letter === "5" ? "S" : letter)
        .join('');
}