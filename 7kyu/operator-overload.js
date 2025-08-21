// ❓ DESCRIPTION:
// We have a class named 'Foo' with a 'val' attribute.
// var foo = new Foo(2);     // foo.val = 2;
// var boo = new Foo(3);    // boo.val = 3;
// We want to be able to sum two Foo object using the '+' operator.
// foo + boo // => must return 5

// ✅ SOLUTION 1:
const Foo = function(value) {
    this.val = value;
}

Foo.prototype.valueOf = function() {
    return this.val;
}

// ✅ SOLUTION 2:
const Foo = function(value) {
    return new Number(value);
}

// 📌 TESTCASE:
console.log(new Foo(2) + new Foo(3), 5);
console.log(new Foo(-2) + new Foo(3), 1);
console.log(new Foo(-21) + new Foo(-7), -28);
console.log(new Foo(1.5) + new Foo(0.2), 1.7);