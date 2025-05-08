const say = function(string1) {
    return (string2) => string1 + " " + string2;
}

const say = string1 => string2 => `${string1} ${string2}`;

console.log(say('Hello')('World'), 'Hello World');