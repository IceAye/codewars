function smallEnough(a, limit){
    return a.filter(item => item <= limit).toString() === a.toString()
}