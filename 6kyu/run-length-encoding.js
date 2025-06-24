const runLengthEncoding = function(str){
    if (str.length === 0) return [];

    const result = [];
    let count = 1;
    let currentChar = str[0];

    for (let i = 1; i < str.length; i++) {
        if (str[i] === currentChar) {
            count++;
        } else {
            result.push([count, currentChar]);
            currentChar = str[i];
            count = 1;
        }
    }
    result.push([count, currentChar]);

    return result;
}

const runLengthEncoding = function(str){
    return (str.match(/(.)\1*/g) || []).reduce((acc, curr) => {
        acc.push([curr.length, curr[0]]);
        return acc;
    }, []);
}


console.log(runLengthEncoding(""), []);
console.log(runLengthEncoding("abc"), [[1,'a'],[1,'b'],[1,'c']]);
console.log(runLengthEncoding("aab"), [[2,'a'],[1,'b']]);
console.log(runLengthEncoding("hello world!"), [[1,'h'],[1,'e'],[2,'l'],[1,'o'],[1,' '],[1,'w'],[1,'o'],[1,'r'],[1,'l'],[1,'d'],[1,'!']]);
console.log(runLengthEncoding("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb"), [[34,'a'], [3,'b']]);
console.log(runLengthEncoding("WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWBWWWWWWWWWWWWWW"),[[12,'W'],[1,'B'],[12,'W'],[3,'B'],[24,'W'],[1,'B'],[14,'W']]);