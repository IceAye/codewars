// SOLUTION 1:
const cannonsReady = (gunners) => {
    for (const gunner in gunners) {
        if (gunners[gunner] === "nay") return "Shiver me timbers!";
    }
    return "Fire!";
};

console.log(
    cannonsReady({ Mike: "aye", Joe: "aye", Johnson: "aye", Peter: "aye" }),
);
console.log(
    cannonsReady({ Mike: "aye", Joe: "nay", Johnson: "aye", Peter: "aye" }),
);
