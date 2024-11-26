function minutesToMidnight(d){
    let seconds = d.getSeconds();
    let sum = (23 - d.getHours()) * 60 + (60 - d.getMinutes());
    seconds > 30 ? sum -= 1 : sum;
    return sum === 1? '1 minute' : sum + ' minutes';
}

let dateBeforeMidnight = new Date(new Date().setHours(23,59,0,0));
console.log(minutesToMidnight(dateBeforeMidnight)) // "1 minute"

let fullDay = new Date(new Date().setHours(0,0,0,0));
console.log(minutesToMidnight(fullDay)) // "1440 minutes"

