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

let d = new Dictionary();
d.newEntry("Apple", "A fruit");
console.log(d.look("Apple")); // 'A fruit'
console.log(d.look("Hi")); // 'Can\'t find entry for Hi'