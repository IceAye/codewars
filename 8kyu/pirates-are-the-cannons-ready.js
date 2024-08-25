// SOLUTION 1:
const cannonsReady = (gunners) => {
    for (const gunner in gunners) {
        if (gunners[gunner] === "nay") return "Shiver me timbers!";
    }
    return "Fire!";
};

// SOLUTION 2:
const cannonsReady = (gunners) => {
    return Object.values(gunners).every(item => item === "aye") ? "Fire!" : "Shiver me timbers!";
};

console.log(
    cannonsReady({ Mike: "aye", Joe: "aye", Johnson: "aye", Peter: "aye" }),
);
console.log(
    cannonsReady({ Mike: "aye", Joe: "nay", Johnson: "aye", Peter: "aye" }),
);
