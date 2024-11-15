function getDivisorsCnt(n){
    let dividers = 0;
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            if ( n / i === i) {
                dividers += 1
            } else {
                dividers += 2
            }
        }
    }
    return dividers
}