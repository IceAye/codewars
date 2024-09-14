function aliasGen(f, l){
    return /^[a-z]/i.test(f) && /^[a-z]/i.test(l)
        ? firstName[f[0].toUpperCase()] + " " + surname[l[0].toUpperCase()]
        : "Your name must start with a letter from A - Z."
}
console.log(aliasGen("Alsou", "Aliga"));
console.log(aliasGen("7393424", "Anumbha"));