function add(n) {
    return (x) => {
        return n + x;
    }
}


console.log(add(1)(3)) // 4