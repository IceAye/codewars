function findChildren(santasList, children) {
    let result = [];
    let santa = new Set(santasList);
    let kids = new Set(children);
    for (const kid of kids) {
        if (santa.has(kid)) result.push(kid);
    }
    return result.sort();
}

console.log(findChildren(["Jason", "Jackson", "Jordan", "Johnny"], ["Jason", "Jordan", "Jennifer"])) // ["Jason", "Jordan"]
console.log(findChildren(["jASon", "JAsoN", "JaSON", "jasON"], ["JasoN", "jASOn", "JAsoN", "jASon", "JASON"])) // ["JAsoN", "jASon"]
console.log(findChildren(["Jason", "James", "Johnson"], ["Jason", "James", "JJ"])) // ["James", "Jason"]
