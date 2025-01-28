function initials(n) {
    const result = [];
    let array = n.split(" ");
    for (let i = 0; i < array.length; i++) {
        if (i === array.length - 1) {
            let lastName = array[i][0].toUpperCase() + array[i].slice(1);
            result.push(lastName);
        } else result.push(array[i][0].toUpperCase());
    }
    return result.join(".");
}

console.log(initials("code wars")); // 'C.Wars'
console.log(initials("Barack hussain obama")); // 'B.H.Obama'
console.log(initials("barack hussain Obama")); // 'B.H.Obama'