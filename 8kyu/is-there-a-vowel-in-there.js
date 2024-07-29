function isVow( a ) {
    const vowels = {
        97: 'a' ,
        101: 'e' ,
        105: 'i' ,
        111: 'o' ,
        117: 'u' ,
    }
    return a.map(item => vowels[item] ? vowels[item] : item);
}

console.log(isVow([101 , 121 , 110 , 113 , 113 , 103 , 121 , 121 , 101 , 107 , 103]));