function weatherInfo (temp) {
    let c = convertToCelsius(temp)
    return (c < 0) ?
        c + " is freezing temperature" :
        c + " is above freezing temperature"
}

function convertToCelsius (temperature) {
    return (temperature - 32) * (5/9)
}