function shark( pontoonDistance , sharkDistance , youSpeed , sharkSpeed , dolphin ) {
    let myPontoon = pontoonDistance / youSpeed;
    let sharkPontoon = sharkDistance / (dolphin ? sharkSpeed / 2 : sharkSpeed)
    return myPontoon < sharkPontoon ? "Alive!" : "Shark Bait!"
}