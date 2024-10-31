function growingPlant(upSpeed, downSpeed, desiredHeight) {
    let days = 0;
    let height = 0;
    while (height <= desiredHeight) {
        height += upSpeed;
        days++;
        if (height < desiredHeight) {
            height -= downSpeed;
        } else return days;
    }
}

console.log(growingPlant(100, 10, 910)); // 10
console.log(growingPlant(10, 9, 4)); // 1
console.log(growingPlant(70, 64, 821)); // 127