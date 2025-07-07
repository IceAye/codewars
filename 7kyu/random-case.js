function randomCase(x) {

    function toRandomLetter (char) {
        const condition = Math.floor(Math.random() * 10);
        return condition > 5 ? char.toUpperCase() : char.toLowerCase();
    }

    return x.split(' ').map(word => [...word].map(char => toRandomLetter(char)).join('')).join(' ');
}

console.log(randomCase("Lorem ipsum dolor sit amet, consectetur adipiscing elit"))
console.log(randomCase("Donec eleifend cursus lobortis"))
console.log(randomCase("THIS IS AN ALL CAPS STRING"))