function bmi(weight, height) {

    let massIndex = weight / height**2;

    return massIndex <= 18.5 ? "Underweight"
        : massIndex <= 25.0 ? "Normal"
            : massIndex <= 30.0 ? "Overweight"
                : "Obese"
}