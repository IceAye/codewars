function inviteMoreWomen(L) {
    return L.reduce((acc, curr) => acc + curr, 0) > 0;
}

console.log(inviteMoreWomen([1, -1, 1])) // true
console.log(inviteMoreWomen([1, 1, 1])) // true
console.log(inviteMoreWomen([-1, -1, -1])) // false
console.log(inviteMoreWomen([1, -1])) // false