function riders(stations) {

    let totalRiders = 1
    let totalDistance = 0

    for (let i = 0; i < stations.length; i++) {
        const station = stations[i]
        totalDistance += station

        if (totalDistance > 100) {
            totalDistance = station
            totalRiders++
        }
    }
    return totalRiders
}

function riders(stations, number = 100) {
    return stations.map( el => number + el > 100 ? [100, number = el][0] : [0, number += el]).filter(e => e >= 100).length
}