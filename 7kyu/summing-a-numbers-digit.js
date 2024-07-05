function sumDigits(number) {
    return Math.abs(number).toString().split('').reduce((sum, current) => +sum + +current, 0)
}