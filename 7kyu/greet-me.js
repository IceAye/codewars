let greet = function (name) {
    return `Hello ${name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()}!`;
};

console.log(greet("riley"));
console.log(greet("JACK"));
