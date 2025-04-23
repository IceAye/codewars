function crap(x, bags, cap){
    let string = x.flat().join('').replace(/_/g, '');

    let full = bags * cap;
    return /D/gi.test(string) ? 'Dog!!' : string.length <= full ? 'Clean' : 'Cr@p';
}

console.log(crap([['_','_','_','_'], ['_','_','_','@'], ['_','_','@', '_']], 2, 2), "Clean");
console.log(crap([['_','_','_','_'], ['_','_','_','@'], ['_','_','@', '_']], 1, 1), "Cr@p");
console.log(crap([['_','_'], ['_','@'], ['D','_']], 2, 2), "Dog!!");