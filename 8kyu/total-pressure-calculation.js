const solution = (
    molarMass1,
    molarMass2,
    givenMass1,
    givenMass2,
    volume,
    temp,
) => {
    let masses = givenMass1 / molarMass1 + givenMass2 / molarMass2;
    let temperatureInKelvin = 273.15 + temp;
    return (masses * 0.082 * temperatureInKelvin) / volume;
};

console.log(solution(44, 30, 3, 2, 5, 50));
