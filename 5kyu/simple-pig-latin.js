function pigIt(str){
    return str.replace(/\w+/g, (match) => match.slice(1) + match.at(0) + "ay")
}
