// ❓ DESCRIPTION:
// In this kata, your job is to create a class Dictionary which you can add words to and their entries. Example:
//
// >>> let d = new Dictionary();
//
// >>> d.newEntry("Apple", "A fruit that grows on trees");
//
// >>> console.log(d.look("Apple"));
// A fruit that grows on trees
//
// >>> console.log(d.look("Banana"));
// Can't find entry for Banana
// Good luck and happy coding!
//
// ✅ SOLUTION:
class Dictionary {
    constructor() {
        this.dict = {};
    }

    newEntry(key, value) {
        return (this.dict[key] = value);
    }

    look(key) {
        return this.dict[key] || `Can't find entry for ${key}`;
    }
}

// 📌 TESTCASE:
let d = new Dictionary();
d.newEntry("Apple", "A fruit");
console.log(d.look("Apple")); // 'A fruit'
console.log(d.look("Hi")); // 'Can\'t find entry for Hi'