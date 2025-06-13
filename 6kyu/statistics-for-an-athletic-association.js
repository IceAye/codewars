function stat(strg) {
    if (strg.length === 0) return "";
    let resultsArray = strg.replace(/\s/g, "").split(",");

    let array = [];
    for (let str of resultsArray) {
        str = str.split("|");
        array.push(+str[0] * 3600000 + +str[1] * 60000 + +str[2] * 1000);
    }

    array.sort((a, b) => a - b);

    let range = new Date(array[array.length - 1] - array[0]);

    let average = new Date(
        array.reduce((acc, curr) => acc + curr, 0) / array.length,
    );

    let middle = Math.floor(array.length / 2);
    let medianNumber =
        array.length % 2 === 0
            ? (array[middle] + array[middle - 1]) / 2
            : array[middle];
    let median = new Date(medianNumber);

    function convertToTime(date) {
        return [date.getUTCHours(), date.getMinutes(), date.getSeconds()]
            .map((el) => el.toString().padStart(2, "0"))
            .join("|");
    }

    return `Range: ${convertToTime(range)} Average: ${convertToTime(average)} Median: ${convertToTime(median)}`;
}

console.log(stat("01|15|59, 1|47|16, 01|17|20, 1|32|34, 2|17|17"), "Range: 01|01|18 Average: 01|38|05 Median: 01|32|34");
console.log(stat("02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|17|17, 2|22|00, 2|31|41"), "Range: 00|31|17 Average: 02|26|18 Median: 02|22|00");
console.log(stat("02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|32|34, 2|17|17"), 'Range: 00|31|17 Average: 02|27|10 Median: 02|24|57');
console.log(stat(""), '');
