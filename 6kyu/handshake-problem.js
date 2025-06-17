function getParticipants(handshakes) {
    if (handshakes === 0) return 0;
    if (handshakes === 1) return 2;

    let n = 3;

    function factorial(number) {
        if (number === 1) return 1;
        return number * factorial(number - 1);
    }

    while (handshakes > factorial(n) / (factorial(n - 2) * 2)) {
        n++;
    }

    return n;
}

function getParticipants(handshakes) {
    let n = 0;

    while (handshakes > n * (n - 1) / 2) {
        n++;
    }

    return n;
}

console.log(getParticipants(0), 0);
console.log(getParticipants(1), 2);
console.log(getParticipants(3), 3);
console.log(getParticipants(6), 4);
console.log(getParticipants(7), 5);
