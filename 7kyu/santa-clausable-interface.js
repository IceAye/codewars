function isSantaClausable(obj) {
    return ['sayHoHoHo', 'distributeGifts', 'goDownTheChimney'].every(methode => typeof obj[methode] === 'function');
}


