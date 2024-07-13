function isValidWalk(walk) {
    return walk.filter(item => item.match(/n/)).length === walk.filter(item => item.match(/s/)).length &&
        walk.filter(item => item.match(/w/)).length === walk.filter(item => item.match(/e/)).length &&
        walk.length === 10
}