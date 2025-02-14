function sortGrades(arr) {
    let grades = ['VB','V0', 'V0+','V1', 'V2', 'V3', 'V4', 'V5', 'V6', 'V7', 'V8', 'V9', 'V10', 'V11', 'V12', 'V13', 'V14', 'V15', 'V16', 'V17'];
    return arr.sort((a,b) => grades.indexOf(a) - grades.indexOf(b));
}

console.log(sortGrades(["V7", "V12", "V1"])); // ["V1", "V7", "V12"]
console.log(sortGrades(["V13", "V14", "VB", "V0"])); // ["VB", "V0", "V13", "V14"]
console.log(sortGrades(["V0+", "V0", "V16", "V2", "VB", "V6"])); // ["VB", "V0", "V0+", "V2", "V6", "V16"]
console.log(sortGrades(["VB", "VB"])); // ["VB", "VB"]
console.log(sortGrades(["V7"])); // ["V7"]
console.log(sortGrades([])); // []