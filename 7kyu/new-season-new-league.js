function premierLeagueStandings(teamStandings) {
    let rest = Object.values(teamStandings).sort((a, b) => a.localeCompare(b));
    let result = { 1: teamStandings[1] };
    let i = 2;
    for (const team of rest) {
        if (teamStandings[1] !== team) {
            result[i] = team;
            i++;
        }
    }
    return result;
}

console.log(premierLeagueStandings({1:'Arsenal'}))
// {1:'Arsenal'}

console.log(premierLeagueStandings({2:'Arsenal', 3:'Accrington Stanley', 1:'Leeds United'}))
// {3:'Arsenal', 2:'Accrington Stanley', 1:'Leeds United'}

console.log(premierLeagueStandings({1:'Leeds United', 2:'Liverpool', 3:'Manchester City', 4:'Coventry', 5:'Arsenal'}))
// {1:'Leeds United', 2:'Arsenal', 3:'Coventry', 4:'Liverpool', 5:'Manchester City'}