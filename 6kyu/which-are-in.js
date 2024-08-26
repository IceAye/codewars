// SOLUTION 1:
function inArray(array1,array2){
    let result = [];

    for (const string of array1) {
        if (array2.some(item => item.includes(string))) result.push(string)

    }
    return result.sort();
}
// SOLUTION 2:
function inArray(array1, array2) {
    return array1
        .filter((string1) => array2.find((string2) => string2.match(string1)))
        .sort();
}

console.log(
    inArray(
        ["xyz", "live", "strong"],
        ["lively", "alive", "harp", "sharp", "armstrong"],
    ),
);
console.log(
    inArray(
        ["live", "strong", "arp"],
        ["lively", "alive", "harp", "sharp", "armstrong"],
    ),
);
console.log(
    inArray(
        ["tarp", "mice", "bull"],
        ["lively", "alive", "harp", "sharp", "armstrong"],
    ),
);
