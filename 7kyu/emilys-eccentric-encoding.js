function decode(str) {
    const abc = '_abcdefghijklmnopqrstuvwxyz';
    return [...str].map(word => word.replace(/[a-z]/g, c => abc.at(-abc.indexOf(c)))).join('');
}

function decode(str) {
    const abc = '_abcdefghijklmnopqrstuvwxyz';
    return [...str].map(word => word.replace(/[a-z]/g, c => abc[25 - abc.indexOf(c)])).join('');
}

console.log(decode("I dlfow orpv gl rmgviervd lm Mlmwzb nlimrmt!")) // "I would like to interview on Monday morning!"
