// ❓ DESCRIPTION:
// Your task, is to create N×N multiplication table, of size provided in parameter.
//
// ✅ SOLUTION:
multiplicationTable = function (size) {
    let result = [];
    for (let i = 1; i <= size; i++) {
        let line = [];
        for (let j = 1; j <= size; j++) {
            line.push(i * j);
        }
        result.push(line);
    }
    return result;
};

// ❓ TESTCASE:
console.log(multiplicationTable(3));
