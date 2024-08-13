function warnTheSheep( queue ) {
    if (queue.at(-1) === 'wolf') return 'Pls go away and stop eating my sheep'
    for (let i = -2; i < queue.length; i--) {
        if (queue.at(i) === 'wolf') {
            return `Oi! Sheep number ${-(i + 1)}! You are about to be eaten by a wolf!`
        }
    }
}