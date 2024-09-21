function betterThanAverage(classPoints, yourPoints) {
    return yourPoints > classPoints.reduce((sum, current) => sum + current, 0) / classPoints.length;
}