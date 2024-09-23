// ❓ DESCRIPTION:
// This code is a mess! Would you help Pac to fix the code in time.
//
// ✅ SOLUTION:
function yourFutureCareer() {
    let career = Math.random();
    return career <= 0.32
        ? "FrontEnd Developer"
        : career <= 0.65
            ? "BackEnd Developer"
            : "Full-Stack Developer";
}

// 📌 TESTCASE:
console.log(yourFutureCareer())
console.log(yourFutureCareer())
console.log(yourFutureCareer())

