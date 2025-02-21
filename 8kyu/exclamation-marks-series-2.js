function remove (string) {
    let result = string
    while (result.endsWith("!")) {
        result = result.replace(/!$/, '')
    }
    return result
}