function flickSwitch(arr){
    let flick = true
    return arr.map(item => (item === 'flick') ? flick = !flick : flick)
}