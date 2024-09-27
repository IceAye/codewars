function generateLink(user) {
    return `http://www.codewars.com/users/${encodeURIComponent(user)}`;
}

console.log(generateLink('matt c'));
console.log(generateLink('g964'));
console.log(generateLink('colbydauph'));