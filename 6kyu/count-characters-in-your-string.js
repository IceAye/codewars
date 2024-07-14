function count( string ) {
    let counting = {}
    string.split('').forEach(function ( ch ) {
        counting[ch] ? counting[ch]++ : counting[ch] = 1;
    })
    return counting
}

console.log(count('abacac'))