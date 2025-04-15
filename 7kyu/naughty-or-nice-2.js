function getNiceNames(people) {
    return people.reduce((acc, curr) => {
        if (curr.wasNice) acc.push(curr.name);
        return acc;
    }, []);
}

function getNaughtyNames(people) {
    return people.reduce((acc, curr) => {
        if (!curr.wasNice) acc.push(curr.name);
        return acc;
    }, []);
}

console.log(getNiceNames( [
    { name: 'Warrior reading this kata', wasNice: true },
    { name: 'xDranik', wasNice: false },
    { name: 'Santa', wasNice: true }
] )) // => returns [ 'Warrior reading this kata', 'Santa' ]

console.log(getNaughtyNames( [
    { name: 'Warrior reading this kata', wasNice: true },
    { name: 'xDranik', wasNice: false },
    { name: 'Santa', wasNice: true }
] )) // => returns [ 'xDranik' ]