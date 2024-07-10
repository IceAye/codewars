let Ghost = function() {
    let colors = ['white', 'yellow', 'purple', 'red']
    this.color = colors[Math.floor(Math.random() * (colors.length))]
}

ghost = new Ghost()
console.log('Output: ' , ghost.color)