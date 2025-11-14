function isItBugged(code){
    return /^(\d{2})-(\d{2})-(\d{4})\s(\d{2}):(\d{2})$/g.test(code);
}

console.log(isItBugged("01_09_2016 01:20"), false);
console.log(isItBugged("14-10-1066 12:00"), true);
console.log(isItBugged("Tenth of January"), false);