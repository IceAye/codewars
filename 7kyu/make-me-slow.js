function makeMeSlow() {
    const start = Date.now();
    while (Date.now() - start < 7000) {
    }
}

function makeMeSlow() {
    // this function is too fast!
    for (let x = 0; x < 5500000000; x++) {
    }
}