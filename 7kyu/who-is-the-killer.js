function killer(suspectInfo, dead) {
    for (const person in suspectInfo) {
        if (dead.every((man) => suspectInfo[person].includes(man))) return person;
    }
}

console.log(killer({'James': ['Jacob', 'Bill', 'Lucas'], 'Johnny': ['David', 'Kyle', 'Lucas'], 'Peter': ['Lucy', 'Kyle']}, ['Lucas', 'Bill'])) // 'James'
console.log(killer({'Brad': [], 'Megan': ['Ben', 'Kevin'], 'Finn': []}, ['Ben'])) // 'Megan'
