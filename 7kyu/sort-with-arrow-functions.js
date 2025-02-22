// ❓ DESCRIPTION:
// Sort and Order people by their age using Arrow Functions
// Your task is to order a list containg people objects by age using the new Javascript Arrow Functions
// Input will be a valid array with People objects containing an Age and Name
// Output will be a valid sorted array with People objects sorted by Age in ascending order
//
// ✅ SOLUTION:
var OrderPeople = function(people){
    return people.sort((a, b) => a.age - b.age);
}