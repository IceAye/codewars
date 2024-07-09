function findOutlier( integers ) {
    let numberEven = []
    for (let i = 0; i < integers.length; i++) {
        if (integers[i] % 2 !== 0) {
            numberEven.push(integers[i]);
        }
    }

    let numberOdd = [];
    for  (let i = 0; i < integers.length; i++) {
        if (integers[i] % 2 === 0 ) {
            numberOdd.push(integers[i]);
        }
    }

    return numberOdd.length !==1 ? +numberEven : +numberOdd;
}