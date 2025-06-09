function isolateIt(arr){
    return arr.map(item => item.slice(0, item.length / 2) + '|' + item.slice(-item.length / 2));
}

console.log(isolateIt(["abcd","efgh"]) , ["ab|cd","ef|gh"]);
console.log(isolateIt(["abcde","fghij"]) , ["ab|de","fg|ij"]);
console.log(isolateIt(["1234","56789"]) , ["12|34","56|89"]);