function daysRepresented(trips) {
    let result = new Set;
    for (const trip of trips) {
        for (let i = trip[0]; i <= trip[1]; i++) {
            result.add(i);
        }
    }
    return result.size;
}

console.log(daysRepresented([[10,15],[25,35]])) // 17
console.log(daysRepresented([[2,8], [220,229],[10,16]])) // 24
console.log(daysRepresented([[2,8], [6,16],[17,26]])) // 25
console.log(daysRepresented([[249,263],[269,271],[147,182],[170,196],[230,239],[209,226]])) // 96

