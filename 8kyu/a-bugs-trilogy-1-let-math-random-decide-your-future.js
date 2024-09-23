function yourFutureCareer() {
    let career = Math.random();
    return career <= 0.32
        ? "FrontEnd Developer"
        : career <= 0.65
            ? "BackEnd Developer"
            : "Full-Stack Developer";
}

console.log(yourFutureCareer())
console.log(yourFutureCareer())
console.log(yourFutureCareer())

