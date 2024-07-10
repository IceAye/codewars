// ❓ DESCRIPTION:
// Oh no! Timmy's evalObject function doesn't work.
// He uses Switch/Cases to evaluate the given properties of an object, can you fix timmy's function?
//
// ✅ SOLUTION:
function evalObject(value){
    switch(value.operation){
        case ('+'):
            return value.a + value.b;
        case ('-'):
            return value.a - value.b;
        case ('/'):
            return value.a / value.b;
        case ('*'):
            return  value.a * value.b;
        case ('%'):
            return value.a % value.b;
        case('^'):
            return  Math.pow(value.a, value.b);
    }
}

console.log('Output: ' , evalObject({a:1,b:1,operation:'+'}))
console.log('Output: ' , evalObject({a:1,b:1,operation:'-'}))
console.log('Output: ' , evalObject({a:1,b:1,operation:'/'}))