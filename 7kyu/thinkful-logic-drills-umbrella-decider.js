function takeUmbrella(weather, chance) {
    switch (weather) {
        case "sunny":
            return chance > 0.5;
        case "rainy":
            return true;
        case "cloudy":
            return chance > 0.2;
    }
}


console.log(takeUmbrella('sunny', 0.4), false);
console.log(takeUmbrella('rainy', 0), true);
console.log(takeUmbrella('cloudy', 0.2), false);
console.log(takeUmbrella('sunny', 0.52), true);