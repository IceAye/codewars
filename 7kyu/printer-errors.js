function printerError(s) {
    return s.split('').filter(item => item.match(/[n-z]/)).length + '/' + s.length
}