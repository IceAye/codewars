function colourAssociation(array) {
    let result = [];
    for (const [key, value] of array) {
        let obj = {};
        obj[key] = value
        result.push(obj);
    }
    return result;
}

console.log(colourAssociation([["white", "goodness"], ["blue", "tranquility"]])) // [{white:"goodness"},{blue:"tranquility"}]
console.log(colourAssociation([["red", "energy"],["yellow", "creativity"],["brown" , "friendly"],["green", "growth"]])) // [{red: "energy"},{yellow: "creativity"}, {brown: "friendly"},{green: "growth"}]