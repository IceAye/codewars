function sc(apple){
    return apple.reduce((acc, curr, ind) => {
        if (curr.includes('B')) {
            acc[0] = ind;
            acc[1] = curr.indexOf('B');
        }
        return acc;
    }, []);
}

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