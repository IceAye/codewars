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

const myList = new List('string')
console.log(myList.add('Hello').count) // 1
console.log(myList.add(5)) // `This item is not of type: string`
console.log(myList.add(' ').add('World!').count) // 3