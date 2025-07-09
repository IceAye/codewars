function middleMe(N, X, Y){
    if (N % 2 === 0) {
        let stringY = Y.repeat(N / 2);
        return stringY + X + stringY;
    }
    return X;
}

console.log(middleMe(18, 'z', '#'), '#########z#########');
console.log(middleMe(19, 'z', '#'), 'z');