function wrap(value) {
    return {
        value: value,
    };
}

let res = wrap("MyTest");
console.log(typeof res);
console.log(res.value);
console.log(wrap(343).value);

let obj = { test: "testy" };
console.log(wrap(obj).value);