function getCount(str) {
    let sum = [];
    for (let i = 0; i < str.length; i++) {
        if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
            sum.push(i);
        }
    }
    return sum.length;
}