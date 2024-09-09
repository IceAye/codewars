// ❓ DESCRIPTION:
// Make a program that filters a list of strings and returns a list with only your friends name in it.
// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
// Input strings will only contain letters. Note: keep the original order of the names in the output.
//
// ✅ SOLUTION:
function friend(friends){
    return friends.filter((item) => item.length === 4)
}

console.log(friend(["Ryan", "Kieran", "Mark"]))
console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]))
console.log(friend(["Robot", "Your", "MOMOMOMO"]))