const splitInParts = function(s, partLength){
    let result = [];
    for (let i = 0; i < s.length; i += partLength) {
        result.push(s.slice(i, partLength + i))
    }
    return result.join(' ');
}

console.log(splitInParts("HelloKata", 1)) // "H e l l o K a t a"
console.log(splitInParts("HelloKata", 9)) //  "HelloKata"
console.log(splitInParts("supercalifragilisticexpialidocious", 3)) //  "sup erc ali fra gil ist ice xpi ali doc iou s"