function alan(x){
    const listOfStops = ['Rejection', 'Disappointment', 'Backstabbing Central', 'Shattered Dreams Parkway'];
    return listOfStops.every(stop => x.includes(stop)) ? 'Smell my cheese you mother!' : 'No, seriously, run. You will miss it.';
}

console.log(alan(['Norwich', 'Rejection', 'Disappointment', 'Backstabbing Central', 'Shattered Dreams Parkway', 'London']), 'Smell my cheese you mother!');
console.log(alan(['London', 'Norwich']), 'No, seriously, run. You will miss it.');
console.log(alan(['Norwich', 'Tooting', 'Bank', 'Rejection', 'Disappointment', 'Backstabbing Central', 'Exeter', 'Shattered Dreams Parkway', 'Belgium','London']), 'Smell my cheese you mother!');