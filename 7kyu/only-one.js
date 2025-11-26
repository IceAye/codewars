// ❓ DESCRIPTION:
// Write function only_one which return True if ONLY ONE of the boolean flag is True, otherwise return False. If there are no boolean flag, return False

// ✅ SOLUTION:
function onlyOne(...args) {
    return (args.filter(el => el === true)).length === 1;
}

// 📌 TESTCASE:
console.log(onlyOne(true, false) == true, 'one true and one false')
console.log(onlyOne())
