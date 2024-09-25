// ❓ DESCRIPTION:
// Write function bmi that calculates body mass index (bmi = weight / height2).
// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"
//
// ✅ SOLUTION:
function bmi(weight, height) {

    let massIndex = weight / height**2;

    return massIndex <= 18.5 ? "Underweight"
        : massIndex <= 25.0 ? "Normal"
            : massIndex <= 30.0 ? "Overweight"
                : "Obese"
}