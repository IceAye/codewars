// ❓ DESCRIPTION:
// This is the simple version of Shortest Code series. If you need some challenges, please try the challenge version.
//
// Task:
// Find out "B"(Bug) in a lot of "A"(Apple).
//
// There will always be one bug in apple, not need to consider the situation that without bug or more than one bugs.
//
// input: string Array apple
//
// output: Location of "B", [x,y]
//
// ✅ SOLUTION:
function sc(apple){
    return apple.reduce((acc, curr, ind) => {
        if (curr.includes('B')) {
            acc[0] = ind;
            acc[1] = curr.indexOf('B');
        }
        return acc;
    }, []);
}

// 📌 TESTCASE:
const apple1= [
    ["B","A","A","A","A"],
    ["A","A","A","A","A"],
    ["A","A","A","A","A"],
    ["A","A","A","A","A"],
    ["A","A","A","A","A"]
]
console.log(sc(apple1), [0,0]);

const apple2= [
    ["A","A","A","A","A"],
    ["A","B","A","A","A"],
    ["A","A","A","A","A"],
    ["A","A","A","A","A"],
    ["A","A","A","A","A"]
]
console.log(sc(apple2), [1,1]);

const apple3= [
    ["A","A","A","A","A"],
    ["A","A","A","A","A"],
    ["A","A","A","A","A"],
    ["A","A","A","A","A"],
    ["A","B","A","A","A"]
]
console.log(sc(apple3), [4,1])