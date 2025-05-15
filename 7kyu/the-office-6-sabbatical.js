function sabb(s, val, happiness){
    let set = new Set('sabbatical');
    let result = val + happiness;
    for (const char of s) {
        if (set.has(char)) result++;
    }
    return result > 22 ? 'Sabbatical! Boom!' : 'Back to your desk, boy.';
}

console.log(sabb('Can I have a sabbatical?', 5, 5), 'Sabbatical! Boom!');
console.log(sabb('Why are you shouting?', 7, 2), 'Back to your desk, boy.');
console.log(sabb('What do you mean I cant learn to code??', 8, 9), 'Sabbatical! Boom!');
console.log(sabb('Please calm down', 9, 1), 'Back to your desk, boy.');