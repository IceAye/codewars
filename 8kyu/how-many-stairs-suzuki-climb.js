function stairsIn20(s){
    return s.flat().reduce((sum, current) => sum + current) * 20
}