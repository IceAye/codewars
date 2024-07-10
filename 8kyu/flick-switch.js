function flickSwitch(arr){
    let flick = true
    return arr.map(item => (item === 'flick') ? flick = !flick : flick)
}
console.log('Output: ' , flickSwitch(["codewars", "flick", "code", "wars"]))
console.log('Output: ' , flickSwitch(["flick", "chocolate", "adventure", "sunshine"]))
console.log('Output: ' , flickSwitch(["bicycle", "jarmony", "flick", "sheep", "flick"]))
