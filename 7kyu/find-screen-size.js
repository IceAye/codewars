function findScreenHeight(width, ratio) {
    let dims = ratio.split(":");
    let height = Math.trunc((width * +dims[1]) / +dims[0]);
    return `${width}x${height}`;
}

console.log(findScreenHeight(1024, "4:3")); // "1024x768"
console.log(findScreenHeight(1280, "16:9")); // "1280x720"
console.log(findScreenHeight(3840, "32:9")); // "3840x1080"