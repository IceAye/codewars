// ❓ DESCRIPTION:
// Class conundrum - Bug Fixing #7
// Oh no! Timmy's List class has broken! Can you help Timmy and fix his class? Timmy has a List class he has created, this is used for type strict arrays (which Timmy calls Lists).
// When Timmy calls the count property of the list it still remains at 0 when adding items.
// Also it fails when Timmy tries to chain the adds e.g.
// myList.add(0).add(1)
//
// ✅ SOLUTION 1:
class List {
    constructor(type) {
        this.type = type;
        this.items = [];
        this.count = 0;
    }

    add(item) {
        if (typeof item !== this.type)
            return `This item is not of type: ${this.type}`;

        this.items.push(item);
        this.count++;
        return this;
    }
}

// ✅ SOLUTION 2:
class List {
    constructor(type) {
        this.type = type;
        this.items = [];
    }

    add(item) {
        if (typeof item !== this.type)
            return `This item is not of type: ${this.type}`;

        this.items.push(item);
        return this;
    }

    get count() {
        return this.items.length;
    }
}

// 📌 TESTCASE:
const myList = new List('string')
console.log(myList.add('Hello').count) // 1
console.log(myList.add(5)) // `This item is not of type: string`
console.log(myList.add(' ').add('World!').count) // 3