// ❓ DESCRIPTION:
// You are a composer who just wrote an awesome piece of music. Now it's time to present it to a band that will perform your piece, but there's a problem! The singers vocal range doesn't stretch as your piece requires, and you have to transpose the whole piece.
//
// Your task
// Given a list of notes (represented as strings) and an interval, output a list of transposed notes in sharp notation.
//
// Input notes may be represented both in flat and sharp notations (more on that below).
//
// For this kata, assume that input is always valid and the song is at least 1 note long.
//
// Assume that interval is an integer between -12 and 12.
//
// Short intro to musical notation
// Transposing a single note means shifting its value by a certain interval.
//
// The notes are as following:
//
// A, A#, B, C, C#, D, D#, E, F, F#, G, G#.
// This is using sharp notation, where '#' after a note means that it is one step higher than the note. So A# is one step higher than A.
//
// An alternative to sharp notation is the flat notation:
//
// A, Bb, B, C, Db, D, Eb, E, F, Gb, G, Ab.
// The 'b' after a note means that it is one step lower than the note.
//
// ✅ SOLUTION:
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

// 📌 TESTCASE:
console.log(transpose(['A'], 1)) // ['A#']
console.log(transpose(['E'], 5)) // ['A']
console.log(transpose(['D#'] , 8)) // ['B']
console.log(transpose(['Ab', 'Gb'] , 2)) // ['A#', 'G#']
console.log(transpose(['Bb', 'C#', 'E'] , -4 )) // ['F#', 'A', 'C']
console.log(transpose(['A#', 'C#', 'D', 'D#', 'A#', 'F#', 'D#'] , -6)) // ['E', 'G', 'G#', 'A', 'E', 'C', 'A']
console.log(transpose(['C', 'C', 'C#', 'D', 'F', 'D', 'F', 'D', 'D', 'C#', 'C', 'G', 'C', 'C'] , 4)) // ['E', 'E', 'F', 'F#', 'A', 'F#', 'A', 'F#', 'F#', 'F', 'E', 'B', 'E', 'E']
