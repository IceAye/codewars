function solve(s){
    let lower = 0
    let upper = 0

    for (let i = 0; i < s.length; i++) {
        s.charAt(i).match(/[a-z]/) ? lower++ : upper++
    }
    return lower >= upper ? s.toLowerCase() : s.toUpperCase()
}