function covfefe(str) {
    let newString = str.replace(/coverage/g , "covfefe");
    return /coverage/g.test(str) ? newString : str + " covfefe";
}

function covfefe(str) {
    if (str.includes("coverage")) {
        return str.replaceAll("coverage" , "covfefe");
    }
    return str + " covfefe"
}

console.log(covfefe("coverage")); // "covfefe"
console.log(covfefe("coverage coverage")); // "covfefe covfefe"
console.log(covfefe("nothing")); // "nothing covfefe"
console.log(covfefe("double space ")); // "double space  covfefe"
console.log(covfefe("covfefe")); // "covfefe covfefe"
console.log(covfefe("erag")); // "erag covfefe"