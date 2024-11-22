// ❓ DESCRIPTION:
// Just a simple sorting usage. Create a function that returns the elements of the input-array / list sorted in lexicographical order.
//
// ✅ SOLUTION:
sortme = function( names ){
    return names.sort();
}

// 📌 TESTCASE:
console.log(sortme(['one', 'two', 'three' ])) // ["one", "three", "two"]
console.log(sortme(["PVFv","bmsx","nciE","oEjR","sYDN","ueVjt"])) // ["PVFv","bmsx","nciE","oEjR","sYDN","ueVjt"]
