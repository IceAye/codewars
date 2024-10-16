// ❓ DESCRIPTION:
// Write a simple parser that will parse and run Deadfish.
// Deadfish has 4 commands, each 1 character long:
// i increments the value (initially 0)
// d decrements the value
// s squares the value
// o outputs the value into the return array
// Invalid characters should be ignored.
//
// ✅ SOLUTION:
function parse(data) {
    let result = [];
    data.split("").reduce((acc, curr) => {
        if (curr === "i") acc++;
        if (curr === "d") acc--;
        if (curr === "s") acc = acc**2;
        if (curr === "o") result.push(acc);
        return acc
    }, 0);
    return result;
}

// 📌 TESTCASE:
console.log(parse("iiisdoso"));
console.log(parse("iiisxxxdoso"));
