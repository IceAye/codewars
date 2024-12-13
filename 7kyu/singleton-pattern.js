const Singleton = function () {
    if (Singleton.__instance) {
        return Singleton.__instance;
    }
    return (Singleton.__instance = this);
};

let obj1 = new Singleton();
let obj2 = new Singleton();
console.log(obj1 === obj2); // => true
obj1.test = 1;
console.log(obj2.test); // => 1