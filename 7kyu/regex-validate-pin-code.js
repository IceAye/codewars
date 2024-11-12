function validatePIN (pin) {
    return (pin.length === 4 || pin.length === 6)
        && pin === pin.match(/\d/gi).join('')
}