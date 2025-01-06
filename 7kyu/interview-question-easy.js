function getStrings(city) {
    let obj = {};
    for (const char of city.replace(/\s/g, "")) {
        obj[char.toLowerCase()] === undefined
            ? (obj[char.toLowerCase()] = "*")
            : (obj[char.toLowerCase()] += "*");
    }
    return Object.entries(obj)
                 .map((el) => `${el[0]}:${el[1]}`)
                 .join(",");
}

console.log(getStrings("Chicago")); // "c:**,h:*,i:*,a:*,g:*,o:*"
console.log(getStrings("Bangkok")); // "b:*,a:*,n:*,g:*,k:**,o:*"
console.log(getStrings("Las Vegas")); // "l:*,a:**,s:**,v:*,e:*,g:*"