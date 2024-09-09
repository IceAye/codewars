function friend(friends){
    return friends.filter((item) => item.length === 4)
}

console.log(friend(["Ryan", "Kieran", "Mark"]))
console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]))
console.log(friend(["Robot", "Your", "MOMOMOMO"]))