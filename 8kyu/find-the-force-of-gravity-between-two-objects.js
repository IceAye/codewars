// ❓ DESCRIPTION:
// Your job is to find the gravitational force between two spherical objects (obj1 , obj2).
// Two arrays are given :
// arr_val (value array), consists of 3 elements
// 1st element : mass of obj 1
// 2nd element : mass of obj 2
// 3rd element : distance between their centers
// arr_unit (unit array), consists of 3 elements
// 1st element : unit for mass of obj 1
// 2nd element : unit for mass of obj 2
// 3rd element : unit for distance between their centers
// mass units are :
// kilogram (kg)
// gram (g)
// milligram (mg)
// microgram (μg)
// pound (lb)
// distance units are :
// meter (m)
// centimeter (cm)
// millimeter (mm)
// micrometer (μm)
// feet (ft)
// Note
// value of G = 6.67 × 10−11 N⋅kg−2⋅m2
// 1 ft = 0.3048 m
// 1 lb = 0.453592 kg
// return value must be Newton for force (obviously)
//
// ✅ SOLUTION:
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
