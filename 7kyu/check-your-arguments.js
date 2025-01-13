function objectType(...obj) {
    return Object.prototype.toString.call(obj.length ? obj[0] : null);
}

console.log(objectType(42)) // '[object Number]'
console.log(objectType(undefined)) //'[object Undefined]'
console.log(objectType()) //'[object Null]'