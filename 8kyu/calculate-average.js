function findAverage(array) {
    return array.length > 0 ? array.reduce((sum, current) => sum + current, 0)/array.length : 0;
}