// ❓ DESCRIPTION:
// The following code is not giving the expected results. Can you debug what the issue is?
//
// ✅ SOLUTION:
const data = [
    {name: 'Joe' , age: 20} ,
    {name: 'Bill' , age: 30} ,
    {name: 'Kate' , age: 23}
]
function getNames( data ) {
    return data.map(item => item.name)
}

console.log('Output: ' , getNames(data))