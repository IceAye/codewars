function bingo(ticket, win){
    let result = 0;

    for (const string of ticket) {
        let char = String.fromCharCode(string[1]);
        if (string[0].includes(char)) result++;
    }
    return result >= win ? 'Winner!' : 'Loser!';
}


console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 2), 'Loser!');
console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 1), 'Winner!');
console.log(bingo([['HGTYRE', 74], ['BE', 66], ['JKTY', 74]], 3), 'Loser!');
console.log(bingo( [['NGSQ',86], ['DVDVBMP',88]] , 1), 'Loser!');