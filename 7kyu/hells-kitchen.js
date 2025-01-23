function gordon(a) {
    return a
        .split(" ")
        .map(
            (word) =>
                word.toUpperCase().replace(/[AEUIO]/g, (c) => (c === "A" ? "@" : "*")) +
                "!!!!",
        )
        .join(" ");
}

console.log(gordon("What feck damn cake")); // 'WH@T!!!! F*CK!!!! D@MN!!!! C@K*!!!!'
console.log(gordon("are you stu pid")); // '@R*!!!! Y**!!!! ST*!!!! P*D!!!!'
console.log(gordon("i am a chef")); // '*!!!! @M!!!! @!!!! CH*F!!!!'
