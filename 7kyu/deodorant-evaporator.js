function evaporator(content, evap_per_day, threshold) {
    let days = 0;
    let totalContent = 100;
    while (totalContent >= threshold) {
        totalContent -= totalContent * (evap_per_day / 100);
        days++;
    }
    return days;
}

console.log(evaporator(10, 10, 5));
console.log(evaporator(10, 10, 10));
