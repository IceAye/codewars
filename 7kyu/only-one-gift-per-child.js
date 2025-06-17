const cache = new Set();

function handOutGift(name) {
    if (cache.has(name)) throw new Error();
    return cache.add(name);
}

console.log(handOutGift("Peter"));
console.log(handOutGift("Alison"));
console.log(handOutGift("John"));
console.log(handOutGift("Maria"));
console.log(handOutGift("Peter"));