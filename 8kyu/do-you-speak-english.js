function spEng( sentence ) {
    return (/english/gi).test(sentence)
}
console.log('Output: ' , spEng("engliSh"))
console.log('Output: ' , spEng("egnlish"))