const ingredients = {
    t: "tomato",
    l: "lettuce",
    c: "cheese",
    g: "guacamole",
    s: "salsa",
};

function tacofy(word) {
    let taco = ["shell"];
    for (let i = 0; i < word.length; i++) {
        if (/[euioa]/gi.test(word[i])) {
            taco.push("beef");
        }
        if (ingredients[word[i].toLowerCase()]) {
            taco.push(ingredients[word[i].toLowerCase()]);
        }
    }
    return [...taco, 'shell'];
}

console.log(tacofy("")) //['shell', 'shell'])
console.log(tacofy("a")) // ['shell', 'beef', 'shell'])
console.log(tacofy("ggg")) // ['shell', 'guacamole', 'guacamole', 'guacamole', 'shell'])
console.log(tacofy("ogl")) //['shell', 'beef', 'guacamole', 'lettuce', 'shell'])
console.log(tacofy("ydjkpwqrzto")) // ['shell', 'tomato', 'beef', 'shell'])
