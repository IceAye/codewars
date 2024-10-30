function getMiddle( s ) {
    let middle = '';

    for (let i = 0; i < s.length; i++) {
        if (s.length % 2 === 1) {middle = s[(s.length - 1) / 2]}
        if (s.length % 2 === 0) {middle = s[s.length/ 2 - 1] + s[s.length/ 2]}

    }
    return middle;
}