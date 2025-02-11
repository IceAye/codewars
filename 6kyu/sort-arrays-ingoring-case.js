function sortme(names){
    return names.sort((a, b) => (a.toUpperCase()).localeCompare(b.toUpperCase()));
}


console.log(sortme(["Hello","there","I'm","fine"])) // ["fine", "Hello", "I'm", "there"]
console.log(sortme(["C", "d", "a", "B"])) // ["a", "B", "C", "d"]
console.log(sortme(["CodeWars"])) // ["CodeWars"]
console.log(sortme([])) // []