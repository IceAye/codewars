function multiples(s1,s2,s3){
    let result = [];
    for (let i = 1; i < s3; i++) {
        if (i % s1 === 0 && i % s2 === 0) result.push(i);
    }
    return result;
}


console.log(multiples(2,4, 40), [4, 8, 12, 16, 20, 24, 28, 32, 36]);
console.log(multiples(13, 5, 800), [65, 130, 195, 260, 325, 390, 455, 520, 585, 650, 715, 780]);
console.log(multiples( 13, 15, 800), [195, 390, 585, 780]);
console.log(multiples(17, 15, 800), [255, 510, 765]);
console.log(multiples(27, 29, 2000), [783, 1566]);
