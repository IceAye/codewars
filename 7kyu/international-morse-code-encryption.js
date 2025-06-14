function encryption(message) {
    return message.split(' ').map(word => [...word].map(char => char.replace(/./, c => CHAR_TO_MORSE[c])).join(' ')).join('   ')
}