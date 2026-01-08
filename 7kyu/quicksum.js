function quicksum(packet) {
    const abc = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (!/^[A-Z ]+$/.test(packet)) return 0;
    return [...packet].reduce((acc, curr, ind) => {
        acc += (ind + 1) * (abc.indexOf(curr) <= 0 ? 0 : abc.indexOf(curr));
        return acc;
    }, 0);

}

console.log(quicksum('ACM'), 46);
console.log(quicksum('MID CENTRAL'), 650);
console.log(quicksum('BBC '), 15);
console.log(quicksum('???'), 0);
console.log(quicksum('axg '), 0);
console.log(quicksum('234 234 WEF ASDF AAA 554211 ???? '), 0);
console.log(quicksum('A C M'), 75);
console.log(quicksum('As '), 0);
