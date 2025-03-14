// ❓ DESCRIPTION:
// The new football league season is coming and the Football Association need some help resetting the league standings. Normally the initial league standing is done in alphabetical order (from A to Z) but this year the FA have decided to freshen it up.
// It has been decided that team who finished first last season will begin the next season in first place. Regardless of what letter their club begins with. e.g. if Manchester City were in first place last year, they will begin the season in position one. All other teams should be in alphabetical order.
// The teams will be fed in as an object ({}). The key will be will be their position from last season and the value is the club's name e.g. Arsenal.
// The output should be an object ({}) with the key as the club's starting position for the new season and the value should be club's name e.g. Arsenal.
//
// ✅ SOLUTION:
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

// ❓ TESTCASE:
console.log(premierLeagueStandings({1:'Arsenal'}))
// {1:'Arsenal'}

console.log(premierLeagueStandings({2:'Arsenal', 3:'Accrington Stanley', 1:'Leeds United'}))
// {3:'Arsenal', 2:'Accrington Stanley', 1:'Leeds United'}

console.log(premierLeagueStandings({1:'Leeds United', 2:'Liverpool', 3:'Manchester City', 4:'Coventry', 5:'Arsenal'}))
// {1:'Leeds United', 2:'Arsenal', 3:'Coventry', 4:'Liverpool', 5:'Manchester City'}