function NameMe(first, last) {
    this.firstName = first;
    this.lastName = last;
    return {
        name: this.firstName + " " + this.lastName,
        firstName: this.firstName,
        lastName: this.lastName,
    };
}

let n = new NameMe("John", "Doe");
console.log(n.firstName); //Expected: John
console.log(n.lastName); //Expected: Doe
console.log(n.name); //Expected: John Doe
