function differenceInAges( ages ) {
    let diff = Math.max(...ages) - Math.min(...ages)
    return [Math.min(...ages), Math.max(...ages), diff]
}