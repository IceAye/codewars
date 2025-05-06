function alphabetized(s) {
    return [...s.replace(/[^a-z]/ig, '')].sort((a, b) => a.toLowerCase().charCodeAt(0) - b.toLowerCase().charCodeAt(0)).join('');
}

console.log(alphabetized('The Holy Bible'), 'BbeehHilloTy')