function countPositivesSumNegatives(input) {
    let positiveCount = 0;
    let negativeSum = 0;
    if (input === null || input.length === 0) {
        return [];
    } else {
        input.forEach((number) => number > 0 ? positiveCount++ : negativeSum += number);
    }
    return [positiveCount , negativeSum];
}