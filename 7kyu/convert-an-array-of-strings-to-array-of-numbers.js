function toNumberArray(stringarray){
    return stringarray.map(item => +item);
}

console.log(toNumberArray(["1.1","2.2","3.3"]));