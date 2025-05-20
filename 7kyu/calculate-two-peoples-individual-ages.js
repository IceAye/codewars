function getAges(sum,difference){
    let age2 = (sum - difference) / 2;
    let age1 = sum - age2;
    if (sum < 0 || difference < 0 || age1 < 0 || age2 < 0) return null;
    return [age1, age2];
};

console.log(getAges(24,4), [14,10]);
console.log(getAges(63,-14), null);

