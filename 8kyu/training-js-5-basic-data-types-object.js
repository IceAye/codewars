// ❓ DESCRIPTION:
// In JavaScript, Object is one of basic data types. To define an object you can use let obj = new Object() or let obj = {}.
// You can define the object attributes during initialization, like this:
// let animal = {name: "dog"}
// Task
// Give you a function animal, accept 1 parameter:obj like this:
// {name:"dog",legs:4,color:"white"}
// and return a string like this: "This white dog has 4 legs."
//
// ✅ SOLUTION:
function animal(obj){
    let animal = obj
    return `This ${animal.color} ${animal.name} has ${animal.legs} legs.`
}