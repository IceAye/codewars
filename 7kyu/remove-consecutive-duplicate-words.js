function removeConsecutiveDuplicates(string) {
    return string.split(" ").reduce((acc, curr, ind) => {
        if (acc[acc.length - 1] !== curr) acc.push(curr);
        return acc;
    }, []).join(" ");
}


console.log(removeConsecutiveDuplicates("alpha alphabeta alphagamma")) // "alpha alphabeta alphagamma"
console.log(removeConsecutiveDuplicates("alpha alpha beta alpha alpha")) // "alpha beta alpha"
console.log(removeConsecutiveDuplicates("alpha beta beta")) // "alpha beta"
