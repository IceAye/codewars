function iTri(s) {
    const distances = {
        Swim: 2.4,
        Bike: 112,
        Run: 26.2,
        getTotal() {
            return this.Swim + this.Bike + this.Run;
        }
    };

    const total = distances.getTotal();
    const remaining = (total - s).toFixed(2);

    if (s === 0) return 'Starting Line... Good Luck!';
    if (s >= total) return "You're done! Stop running!";

    if (s < distances.Swim) {
        return { Swim: `${remaining} to go!` };
    } else if (s < distances.Swim + distances.Bike) {
        return { Bike: `${remaining} to go!` };
    } else {
        return {
            Run: remaining <= 10 ? 'Nearly there!' : `${remaining} to go!`
        };
    }
}

function iTri(dist){
    let totalDist = 2.4 + 112 + 26.2;
    if (dist === 0) return 'Starting Line... Good Luck!';
    if (dist <= 2.4) return {'Swim': `${(totalDist - dist).toFixed(2)} to go!`};
    if (dist <= 114.4) return {'Bike': `${(totalDist - dist).toFixed(2)} to go!`};
    if (dist <= 127) return {'Run': `${(totalDist - dist).toFixed(2)} to go!`};
    if (dist < totalDist) return {'Run': `Nearly there!`};
    return "You're done! Stop running!";
}

console.log(iTri(36), { Bike: '104.60 to go!' });
console.log(iTri(103.5), { Bike: '37.10 to go!' });
console.log(iTri(0), 'Starting Line... Good Luck!');
console.log(iTri(2), { Swim: '138.60 to go!' });
console.log(iTri(123), { Run: '17.60 to go!' });
