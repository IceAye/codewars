function findSuperMan(s) {
    let string = s.replace("Hello, I am ", "").toLowerCase();
    let indices = [];
    let word = "superman";
    for (const char of word) {
        if (string.indexOf(char) !== -1) {
            indices.push(string.indexOf(char));
        }
    }
    if (indices.length < 8) return "Are you crazy?";
    if (indices[0] < indices[7]) {
        for (let i = 0; i < indices.length - 1; i++) {
            if (indices[i] === indices[i + 1] - 1) return "Are you crazy?";
        }
    } else {
        for (let i = 7; i > 0; i--) {
            if (indices[i] === indices[i - 1] - 1) return "Are you crazy?";
        }
    }
    return "Hi, SuperMan!";
}

function findSuperMan(s){
    return /s.+u.+p.+e.+r.+m.+a.+n|n.+a.+m.+r.+e.+p.+u.+s/i.test(s) ? "Hi, SuperMan!" : "Are you crazy?";
}

console.log(findSuperMan("Hello, I am SuxpxexrxMxaxn")) // "Are you crazy?"
console.log(findSuperMan("Hello, I am SxuxpxexrxMxaxn")) // "Hi, SuperMan!"
console.log(findSuperMan("Hello, I am nxaxmxrxexpxuxs")) // "Hi, SuperMan!"
console.log(findSuperMan("jfc szzw qudzgh pz geddxyrq mqlvgc ya oddn")) // "Hi, SuperMan!"
console.log(findSuperMan("dfg hijkl onamrepusjkl oq")) // "Are you crazy?"
console.log(findSuperMan(" o krlhu vtnbvaaugsb")) // "Are you crazy?"
console.log(findSuperMan("y nggqczakimfzdoj  kr ex c yqf pfft kqzlus")) // "Are you crazy?"
