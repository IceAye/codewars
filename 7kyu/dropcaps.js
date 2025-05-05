// ❓ DESCRIPTION:
// DropCaps means that the first letter of the starting word of the paragraph should be in caps and the remaining lowercase, just like you see in the newspaper.
// But for a change, let"s do that for each and every word of the given String. Your task is to capitalize every word that has length greater than 2, leaving smaller words as they are.
// *should work also on Leading and Trailing Spaces and caps.
// Note: you will be provided at least one word and should take string as input and return string as output.
//
// ✅ SOLUTION 1:
function dropCap(n) {
    return n.split(' ').map(word => word.length > 2 ? word[0].toUpperCase() + word.slice(1).toLowerCase() : word).join(' ');
}

// ✅ SOLUTION 2:
function dropCap(n) {
    return n.replace(/\S{3,}/g, w => w[0].toUpperCase() + w.slice(1).toLowerCase());
}

// 📌 TESTCASE:
console.log(dropCap('Apple Banana'),"Apple Banana");
console.log(dropCap('Apple'),"Apple");
console.log(dropCap(''),"");
console.log(dropCap('of'),"of");
console.log(dropCap('Revelation of the contents outraged American public opinion, and helped generate'),"Revelation of The Contents Outraged American Public Opinion, And Helped Generate");
console.log(dropCap('more  than    one space between words'),"More  Than    One Space Between Words")
console.log(dropCap('  leading spaces'),"  Leading Spaces")
console.log(dropCap('trailing spaces   '),"Trailing Spaces   ")
console.log(dropCap('ALL CAPS CRAZINESS'),"All Caps Craziness")
console.log(dropCap('rAnDoM CaPs CrAzInEsS'),"Random Caps Craziness")