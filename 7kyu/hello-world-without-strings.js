const helloWorld = () => {
    let result = String();
    [72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100, 33].map((item) => result += String.fromCharCode(item));
    return result;
};

const helloWorld = () => String.fromCharCode(72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100, 33);

console.log(helloWorld()); // "Hello, World!"