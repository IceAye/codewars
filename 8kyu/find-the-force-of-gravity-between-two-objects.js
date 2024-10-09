const solution = (arrVal, arrUnit) => {
    const mass = (m) => {
        return m === "g" ? Math.pow(10, -3) : m === "mg" ? Math.pow(10, -6) : m === "μg" ? Math.pow(10, -9) : m === "lb" ? 0.453592 : 1
    }
    const dist = (d) => {
        return d === "cm" ? Math.pow(10, -2) : d === "mm" ? Math.pow(10, -3) : d === "μm" ? Math.pow(10, -6) : d === "ft" ? 0.3048 : 1
    }

    return  6.67 * Math.pow(10, -11) * arrVal[0] * mass(arrUnit[0]) * arrVal[1] * mass(arrUnit[1]) / Math.pow(arrVal[2] * dist(arrUnit[2]), 2)
};

console.log(solution([1000, 1000, 100], ["g", "kg", "m"]))
console.log(solution([1000, 1000, 100], ["kg", "kg", "m"]))
console.log(solution([1000, 1000, 100], ["kg", "kg", "cm"]))
