function points( games ) {
    let result = 0;
    for (let i = 0; i < games.length; i++) {
        let match = games[i];
        let x = match[0];
        let y = match[2];

        if (x > y) result += 3;
        else if (x === y) result += 1;
        else 0;
    }
    return result;
}