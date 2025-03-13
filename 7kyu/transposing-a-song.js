const sharp = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];
const flat = ["A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab"];

function transpose(song, interval) {
    let result = [];
    for (let i = 0; i < song.length; i++) {
        if (interval > 0) {
            let index = sharp.indexOf(song[i]);
            if (index === -1) {
                result.push(sharp[(flat.indexOf(song[i]) + interval) % sharp.length]);
            } else {
                result.push(sharp[(index + interval) % sharp.length]);
            }
        } else {
            let index = flat.indexOf(song[i]);
            if (index === -1) {
                result.push(
                    sharp.at((sharp.indexOf(song[i]) + interval) % sharp.length),
                );
            } else {
                result.push(sharp.at((index + interval) % sharp.length));
            }
        }
    }
    return result;
}

console.log(transpose(['A'], 1)) // ['A#']
console.log(transpose(['E'], 5)) // ['A']
console.log(transpose(['D#'] , 8)) // ['B']
console.log(transpose(['Ab', 'Gb'] , 2)) // ['A#', 'G#']
console.log(transpose(['Bb', 'C#', 'E'] , -4 )) // ['F#', 'A', 'C']
console.log(transpose(['A#', 'C#', 'D', 'D#', 'A#', 'F#', 'D#'] , -6)) // ['E', 'G', 'G#', 'A', 'E', 'C', 'A']
console.log(transpose(['C', 'C', 'C#', 'D', 'F', 'D', 'F', 'D', 'D', 'C#', 'C', 'G', 'C', 'C'] , 4)) // ['E', 'E', 'F', 'F#', 'A', 'F#', 'A', 'F#', 'F#', 'F', 'E', 'B', 'E', 'E']
