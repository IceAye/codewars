function anArgument() {
    const startPhrase = [...arguments].slice(0, -1).join('", "');
    const endPhrase = [...arguments].slice(-1).toString();
    const argLength = arguments.length;
    return argLength === 0 ? 'You didn\'t give me any arguments.' : argLength === 1 ? `You gave me 1 argument and it is "${endPhrase}".` : `You gave me ${arguments.length} arguments and they are "${startPhrase}" and "${endPhrase}".`;
}

console.log(
    anArgument('chairs', 'table', 'lamp', 'sideboard'), 'You gave me 4 arguments and they are "chairs", "table",' +
    ' "lamp"' +
    ' and "sideboard".');
console.log(anArgument('limes', 'pickles', 'musk ox'), 'You gave me 3 arguments and they are "limes", "pickles" and' +
    ' "musk' +
    ' ox".');
console.log(
    anArgument('trains', 'trains', 'trains', 'trains', 'trains', 'trains'), 'You gave me 6 arguments and they are' +
    ' "trains",' +
    ' "trains", "trains", "trains", "trains" and "trains".');
