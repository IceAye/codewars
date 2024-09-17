function sumArray(array) {
    if (array != null && array.length > 2 ) {
        return array.sort((a, b) => a - b)
                    .slice(1, -1)
                    .reduce((sum, current) => sum + current, 0);
    } else return 0;
}