// ❓ DESCRIPTION:
// The code provided is supposed return a person's Full Name given their first and last names.
// But it's not working properly.
// The first and/or last names are never null, but may be empty.
//
// ✅ SOLUTION:
class Dinglemouse {
    constructor( firstName, lastName ){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName(){
        return (this.firstName + " " + this.lastName).trim()
    }
}