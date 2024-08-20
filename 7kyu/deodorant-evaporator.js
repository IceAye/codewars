function evaporator(content, evap_per_day, threshold) {
    let base = content * (threshold / 100);
    let days = 0;
    while (content >= base) {
        content -= content * (evap_per_day / 100);
        days++;
    }
    return days;
}

console.log(evaporator(10, 10, 5));
console.log(evaporator(10, 10, 10));
