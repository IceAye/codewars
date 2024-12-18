function capMe(names) {
    return names.map(item => item[0].toUpperCase() + item.slice(1).toLowerCase());
}

console.log(capMe(['jo' , 'nelson' , 'jurie'])) // returns ['Jo', 'Nelson', 'Jurie']
console.log(capMe(['KARLY' , 'DANIEL' , 'KELSEY'])) // returns ['Karly', 'Daniel', 'Kelsey']