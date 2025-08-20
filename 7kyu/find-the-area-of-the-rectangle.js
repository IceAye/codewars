function area(d,l){
    const w = Math.sqrt(d**2 - l**2);
    const square = (w * l).toFixed(2);
    return d <= w || d <= l ? 'Not a rectangle' : +square;
}

console.log(area(5,4),12);
console.log(area(10,6),48);
console.log(area(13,5),60);
console.log(area(12,5),54.54);