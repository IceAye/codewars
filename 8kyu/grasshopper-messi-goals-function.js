// ❓ DESCRIPTION:
// Messi is a soccer player with goals in three leagues:
//
// LaLiga
// Copa del Rey
// Champions
// Complete the function to return his total number of goals in all three leagues.
//
// Note: the input will always be valid.
//
// ✅ SOLUTION:
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

function goals (...goalsArray) {
    return goalsArray.reduce((acc, curr) => acc + curr , 0);
}