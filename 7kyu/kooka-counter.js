const kookaCounter = function(laughing) {
    let count = 0;
    let array = laughing.split('a');
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] !== array[i + 1]) count++;
    }
    return count;
}

console.log(kookaCounter(""), 0);
console.log(kookaCounter("hahahahaha"), 1);
console.log(kookaCounter("hahahahahaHaHaHa"), 2);
console.log(kookaCounter("HaHaHahahaHaHa"), 3);