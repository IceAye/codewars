// ❓ DESCRIPTION:
// Write a function that accepts arbitrary X and Y resolutions and converts them into resolutions with a 16:9 aspect ratio that maintain equal height. Round your answers up to the nearest integer.
//
// ✅ SOLUTION:
function aspectRatio(x, y) {
    return [Math.ceil(y * 16 / 9), y];
}

// 📌 TESTCASE:
console.log(aspectRatio(640, 480));
console.log(aspectRatio(960, 720));