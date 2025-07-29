function solve(a, b) {
    let [alice, bob] = [0, 0];
    for (let i = 0; i < 3; i++) {
        if (a[i] > b[i]) alice++;
        if (a[i] < b[i]) bob++;
    }
    return `${alice}, ${bob}: ${alice > bob ? 'Alice made "Kurt" proud!' : alice < bob ? 'Bob made "Jeff" proud!' : 'that looks like a "draw"! Rock on!'}`;
}

console.log(solve([47, 7, 2], [47, 7, 2]),'0, 0: that looks like a "draw"! Rock on!');
console.log(solve([47, 67, 22], [26, 47, 12]),'3, 0: Alice made "Kurt" proud!');
console.log(solve([25, 50, 22], [34, 49, 50]),'1, 2: Bob made "Jeff" proud!');