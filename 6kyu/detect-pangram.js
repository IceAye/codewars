function isPangram(string){
    arr = new Set(string)
    return arr.size > 26
}
