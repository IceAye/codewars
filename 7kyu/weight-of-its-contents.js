function contentWeight(bottleWeight, scale) {
    const params = scale.split(" ");
    const waterScale = parseInt(params[0]);
    return params[2] === "larger" ? waterScale * bottleWeight / (waterScale + 1) : bottleWeight / (waterScale + 1);
}

console.log(contentWeight(120, "2 times larger"), 80);