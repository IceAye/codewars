function buildFun(n) {
    let res = [];

    for (let i = 0; i <= n; i++) {
        res.push(() => i);
    }
    return res;
}

console.log(buildFun(10));