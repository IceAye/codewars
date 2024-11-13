function nbYear(p0 , percent , aug , p , year = 0) {
    while (p0 < p) {
        ++year
        p0 = p0 + Math.floor(p0 * (percent / 100)) + aug
        return nbYear(p0 , percent , aug , p , year)
    }
    return year
}