function paul(x){
    const points = {
        kata: 5,
        "Petes kata": 10,
        life: 0,
        eating: 1,
    };
    const score = x.reduce((acc, curr) => acc + points[curr], 0);

    if (score < 40) {
        return "Super happy!";
    } else if (score < 70) {
        return "Happy!";
    } else if (score < 100) {
        return "Sad!";
    } else if (score === 100) {
        return "Miserable!";
    }
}

console.log(paul(['life', 'eating', 'life']), 'Super happy!');
console.log(paul(['life', 'Petes kata', 'Petes kata', 'Petes kata', 'eating']), 'Super happy!');
console.log(paul(['Petes kata', 'Petes kata', 'eating', 'Petes kata', 'Petes kata', 'eating']), 'Happy!');