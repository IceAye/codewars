function spot(s1,s2){
    const positions = [];
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) positions.push(i);
    }
    return positions;
}

console.log(spot('abcdefg', 'abcqetg'), [3, 5]);
console.log(spot('Hello World!', 'hello world.'), [0, 6, 11]);
console.log(spot('FixedGrey', 'FixedGrey'), []);