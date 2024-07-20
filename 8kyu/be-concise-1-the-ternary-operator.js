function describeAge(age) {
    return `You're a(n) ${age>=65?"elderly":age>=18?"adult":age>=13?"teenager":"kid"}`
}

console.log(describeAge(9))
console.log(describeAge(17))
console.log(describeAge(64))
console.log(describeAge(18))
console.log(describeAge(65))