function lottery(str) {
    str = str.replace(/\D/gi, "");
    return [...new Set(str).keys()].join("") || "One more run!";
}

console.log(lottery("wQ8Hy0y5m5oshQPeRCkG")); // "805"
console.log(lottery("ffaQtaRFKeGIIBIcSJtg")); //"One more run!"