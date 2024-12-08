// ❓ DESCRIPTION:
// Colour plays an important role in our lifes. Most of us like this colour better then another. User experience specialists believe that certain colours have certain psychological meanings for us.
// You are given a 2D array, composed of a colour and its 'common' association in each array element. The function you will write needs to return the colour as 'key' and association as its 'value'.
//
// ✅ SOLUTION 1:
function colourAssociation(array) {
    let result = [];
    for (const [key, value] of array) {
        let obj = {};
        obj[key] = value
        result.push(obj);
    }
    return result;
}

// ✅ SOLUTION 2:
function colourAssociation(array) {
    return array.map(([key, value]) => ({ [key]: value }));
}

// 📌 TESTCASE:
console.log(colourAssociation([["white", "goodness"], ["blue", "tranquility"]])) // [{white:"goodness"},{blue:"tranquility"}]
console.log(colourAssociation([["red", "energy"],["yellow", "creativity"],["brown" , "friendly"],["green", "growth"]])) // [{red: "energy"},{yellow: "creativity"}, {brown: "friendly"},{green: "growth"}]