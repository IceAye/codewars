function countSheeps(sheep) {
    return sheep.reduce((sum, current) => sum + (current == true ? 1 : 0), 0);
}