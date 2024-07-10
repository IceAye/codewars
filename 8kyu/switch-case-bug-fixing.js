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