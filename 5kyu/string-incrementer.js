function incrementString (strng) {
    let result = "";
    strng.replace(/\d+$/, c => result = c);
    let number = (+result + 1).toString().padStart(result.length, "0");
    return strng.replace(/(\d+)?$/, c => c ? number : 1);
}


console.log(incrementString("foobar000"));
console.log(incrementString("foobar999"));
console.log(incrementString("foobar00999"));
console.log(incrementString("foo"));
console.log(incrementString("fo99obar99"));