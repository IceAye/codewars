// ❓ DESCRIPTION:
// Hey, young man, don't look around, I'm talking to you!
//
// I am a programmer, work in this madhouse. my job is research code, and... at the same time I am also the other researcher's study object. There are a lot of the same people and work with me.
//
// My recent research is how to find Superman, because I found that a SuperMan is hidden inside us, we must find him, then let him go to save the planet.
//
// The conclusion of my research:
// 1. If a person is talking to you, the word 'Superman' appears in
//    the sentence, so he is not a superman.
// 2. Because Superman usually careful to hide the word 'Superman' in
//    a sentence, and each of the two letters are not continuous.
// 3. Sometimes Superman will be especially careful, reverse the word,
//    or transform uppercase and lowercase, let others more difficult
//    to find out.
// Now, I invite you to help me write the code (my hand was injured, there is no way to knock on the keyboard), a function which can correctly find out who is Superman, and let him wear the red pants and cloak, save our earth!
//
// output is a string, if find out SuperMan,
// say "Hi, SuperMan!" to him,  otherwise, say "Are you crazy?"
//
// ✅ SOLUTION 1:
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

// ✅ SOLUTION 2:
function findSuperMan(s){
    return /s.+u.+p.+e.+r.+m.+a.+n|n.+a.+m.+r.+e.+p.+u.+s/i.test(s) ? "Hi, SuperMan!" : "Are you crazy?";
}

// 📌 TESTCASE:
console.log(findSuperMan("Hello, I am SuxpxexrxMxaxn")) // "Are you crazy?"
console.log(findSuperMan("Hello, I am SxuxpxexrxMxaxn")) // "Hi, SuperMan!"
console.log(findSuperMan("Hello, I am nxaxmxrxexpxuxs")) // "Hi, SuperMan!"
console.log(findSuperMan("jfc szzw qudzgh pz geddxyrq mqlvgc ya oddn")) // "Hi, SuperMan!"
console.log(findSuperMan("dfg hijkl onamrepusjkl oq")) // "Are you crazy?"
console.log(findSuperMan(" o krlhu vtnbvaaugsb")) // "Are you crazy?"
console.log(findSuperMan("y nggqczakimfzdoj  kr ex c yqf pfft kqzlus")) // "Are you crazy?"
