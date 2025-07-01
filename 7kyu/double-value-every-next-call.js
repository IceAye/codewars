class Class {
    static number = 1;

    static getNumber() {
        let current = Class.number;
        Class.number *= 2;
        return current;
    }
}

console.log(Class.getNumber(),  1, "1st call should return 1");
console.log(Class.getNumber(),  2, "2nd call should return 2");
console.log(Class.getNumber(),  4, "3rd call should return 4");
console.log(Class.getNumber(),  8, "4th call should return 8");
console.log(Class.getNumber(), 16, "5th call should return 16");