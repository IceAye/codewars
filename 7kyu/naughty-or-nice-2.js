// ❓ DESCRIPTION:
// Happy Holidays fellow Code Warriors!
// It's almost Christmas! That means Santa's making his list, and checking it twice. Unfortunately, elves accidentally mixed the Naughty and Nice list together! Santa needs your help to save Christmas!
//
// Save Christmas!
// Santa needs you to write two functions. Both of the functions accept a sequence of objects. The first one returns a sequence containing only the names of the nice people, and the other returns a sequence containing only the names of the naughty people. Return an empty sequence [] if the result from either of the functions contains no names.
//
// The objects in the passed will represent people. Each object contains two properties: name and wasNice.
// name - The name of the person
// wasNice - True if the person was nice this year, false if they were naughty
//
// ✅ SOLUTION:
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

// 📌 TESTCASE:
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