function anyArrows(arrows){
    return arrows.some( item => !item.damaged);
}

console.log(anyArrows([{range: 5}, {range: 10, damaged: true}, {damaged: true}]));
console.log(anyArrows([{range: 10, damaged: true}, {damaged: true}]));
console.log(anyArrows([]));
