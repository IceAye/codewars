function isValidWalk(walk) {
    return walk.filter(item => item.match(/n/)).length === walk.filter(item => item.match(/s/)).length &&
        walk.filter(item => item.match(/w/)).length === walk.filter(item => item.match(/e/)).length &&
        walk.length === 10
}

console.log('Output: ' , isValidWalk(['n','s','n','s','n','s','n','s','n','s']))
console.log('Output: ' , isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']))