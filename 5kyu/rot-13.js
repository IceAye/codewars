function rot13(message) {
    let input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    let encoded = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'

    return message.replace(/[a-z]/gi, char => encoded[input.indexOf(char)])
}