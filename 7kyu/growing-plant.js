// ❓ DESCRIPTION:
// Each day a plant is growing by upSpeed meters. Each night that plant's height decreases by downSpeed meters due to the lack of sun heat. Initially, plant is 0 meters tall. We plant the seed at the beginning of a day. We want to know when the height of the plant will reach a certain level.
// The number of days that it will take for the plant to reach/pass desiredHeight (including the last day in the total count).
//
// ✅ SOLUTION:
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

// 📌 TESTCASE:
console.log(growingPlant(100, 10, 910)); // 10
console.log(growingPlant(10, 9, 4)); // 1
console.log(growingPlant(70, 64, 821)); // 127