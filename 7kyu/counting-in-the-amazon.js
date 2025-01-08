// ❓ DESCRIPTION:
// The Arara are an isolated tribe found in the Amazon who count in pairs. For example one to eight is as follows:
//
// 1 = anane
// 2 = adak
// 3 = adak anane
// 4 = adak adak
// 5 = adak adak anane
// 6 = adak adak adak
// 7 = adak adak adak anane
// 8 = adak adak adak adak
//
// Take a given number and return the Arara's equivalent.
//
// ✅ SOLUTION:
function countArara(n) {
    if (n === 1) return "anane";
    return n % 2
        ? "adak ".repeat(n / 2) + "anane"
        : "adak" + " adak".repeat(n / 2 - 1);
}

// 📌 TESTCASE:
console.log(countArara(1)); // "anane"
console.log(countArara(3)); // "adak anane"
console.log(countArara(8)); // "adak adak adak adak"