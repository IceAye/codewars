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