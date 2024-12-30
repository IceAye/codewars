function greet(name) {
    return name ? `hello ${name}!` : null
}

console.log(greet("Niks")) // "hello Niks!"
console.log(greet(null)) // null
