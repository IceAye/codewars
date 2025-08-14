function fire(x,y) {
    const axisX = x === 0 ? 'left' : x === 1 ? 'middle' : 'right';
    const axisY = y === 0 ? 'top' : y === 1 ? 'middle' : 'bottom';
    return x === 1 && y === 1 ? 'center' : `${axisY} ${axisX}`;
}

console.log(fire(0,0),'top left')
console.log(fire(1,2),'bottom middle')
console.log(fire(1,1),'center')