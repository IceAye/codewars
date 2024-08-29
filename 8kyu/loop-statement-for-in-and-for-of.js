function giveMeFive(obj) {
    let array = [];
    for (const key in obj) {
        if (key.length === 5) array.push(key);
        if (obj[key].length === 5) array.push(obj[key]);
    }
    return array;
}

console.log(giveMeFive({ Our: "earth", is: "a", beautyful: "world" }));
console.log(
    giveMeFive({ Ihave: "enough", money: "to", buy: "a", car: "model" }),
);
console.log(giveMeFive({ Pears: "than", apple: "sweet" }));
