function hello(name) {
    return `Hello, ${name ? name.at(0).toUpperCase() + name.slice(1).toLowerCase() : 'World'}!`
}