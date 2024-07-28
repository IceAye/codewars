class God {
    static create() {
        return [new Man("Adam"), new Woman("Eve")]
    }
}

class Human {
    constructor(name) {
        this.name = name
    }
}
class Man extends Human {}
class Woman extends Human {}

console.log(God.create())