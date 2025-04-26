function golfScoreCalculator(parList, scoreList){
    let result = 0;

    for (let i = 0; i < parList.length; i++) {
        result += scoreList[i] - parList[i];
    }

    return result;
}

function golfScoreCalculator(parList, scoreList){
    return [...scoreList].reduce((acc, curr, ind) => acc + (curr - parList[ind]), 0);
}

console.log(golfScoreCalculator('443454444344544443', '353445334534445344'), -1);
console.log(golfScoreCalculator('123456123456123456', '123456123456123456'), 0);