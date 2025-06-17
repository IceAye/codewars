// ❓ DESCRIPTION:
// Johnny is a farmer and he annually holds a beet farmers convention "Drop the beet".
// Every year he takes photos of farmers handshaking. Johnny knows that no two farmers handshake more than once. He also knows that some of the possible handshake combinations may not happen.
// However, Johnny would like to know the minimal amount of people that participated this year just by counting all the handshakes.
// Help Johnny by writing a function, that takes the amount of handshakes and returns the minimal amount of people needed to perform these handshakes (a pair of farmers handshake only once).
//
// ✅ SOLUTION 1:
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

// ✅ SOLUTION 2:
function getParticipants(handshakes) {
    let n = 0;

    while (handshakes > n * (n - 1) / 2) {
        n++;
    }

    return n;
}

// 📌 TESTCASE:
console.log(getParticipants(0), 0);
console.log(getParticipants(1), 2);
console.log(getParticipants(3), 3);
console.log(getParticipants(6), 4);
console.log(getParticipants(7), 5);
