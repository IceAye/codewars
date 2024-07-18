function isLockNessMonster(s) {
    return /tree fiddy|3.50|three fifty/.test(s)
}

console.log(isLockNessMonster("Your girlscout cookies are ready to ship. Your total comes to tree fiddy"))
console.log(isLockNessMonster("Your girlscout cookies are ready to ship. Your total comes to tree fiddy\n" +
    "Howdy Pardner. Name's Pete Lexington. I reckon you're the kinda stiff who carries about tree fiddy?\n" +
    "I'm from Scottland. I moved here to be with my family sir. Please, $3.50 would go a long way to help me find them"))