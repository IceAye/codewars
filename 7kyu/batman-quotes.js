const getQuote = function(quotes, hero){
    const index = +hero.match(/\d/g);
    const name = hero[0] === 'B' ? 'Batman' : hero[0] === 'R' ? 'Robin' : 'Joker';
    return `${name}: ${quotes[index]}`;
}


let quotes = ["WHERE IS SHE?!", "Holy haberdashery, Batman!", "Let's put a smile on that faaaceee!"];
console.log(getQuote(quotes, "Rob1n"), "Robin: Holy haberdashery, Batman!");
console.log(getQuote(quotes, "Joke2"), "Joker: Let's put a smile on that faaaceee!");
console.log(getQuote(quotes, "Batm0n"), "Batman: WHERE IS SHE?!");