function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

function goals (...goalsArray) {
    return goalsArray.reduce((acc, curr) => acc + curr , 0);
};