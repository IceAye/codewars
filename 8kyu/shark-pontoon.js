function shark( pontoonDistance , sharkDistance , youSpeed , sharkSpeed , dolphin ) {
    let myPontoon = pontoonDistance / youSpeed;
    let sharkPontoon = sharkDistance / (dolphin ? sharkSpeed / 2 : sharkSpeed)
    return myPontoon < sharkPontoon ? "Alive!" : "Shark Bait!"
}

console.log('Output: ' , shark(12, 50, 4, 8, true))
console.log('Output: ' , shark(24, 0, 4, 8, true))