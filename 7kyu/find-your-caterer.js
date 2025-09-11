function findCaterer(budget, people){
    if (!people) return -1;

    const total = budget / people;
    if (people > 60) {
        const discCost = 30 * 0.8;
        if ((budget / people) >= discCost) return 3
    }

    return  total >= 30 ? 3 : total >= 20 ? 2 : total >= 15 ? 1 : -1;
}

console.log(findCaterer(150, 10), 1);
console.log(findCaterer(1500, 60), 2);
console.log(findCaterer(1500, 61), 3);
console.log(findCaterer(100, 0), -1);
console.log(findCaterer(200, 5), 3);
console.log(findCaterer(1000, 45), 2);
console.log(findCaterer(940, 70), -1);