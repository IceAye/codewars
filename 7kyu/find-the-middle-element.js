function gimme (triplet) {
    return triplet.indexOf(triplet.concat().sort((a,b) => a - b)[1])
}