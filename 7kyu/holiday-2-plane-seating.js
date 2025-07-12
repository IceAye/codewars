function planeSeat(a){
    const number = parseInt(a);
    const letter = a.replace(/\d/g, '');

    if (/[IJa-z]/g.test(a) || number > 60) return 'No Seat!!';

    const section = number < 21 ? 'Front' : number < 41 ? 'Middle' : 'Back';
    const cluster = letter < 'D' ? 'Left' : letter < 'G' ? 'Middle' : 'Right'
    return section + '-' + cluster;
}

console.log(planeSeat('2B'), 'Front-Left');
console.log(planeSeat('20B'), 'Front-Left');
console.log(planeSeat('58I'), 'No Seat!!');