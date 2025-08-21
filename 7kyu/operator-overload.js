const Foo = function(value) {
    this.val = value;
}

Foo.prototype.valueOf = function() {
    return this.val;
}

console.log(new Foo(2) + new Foo(3), 5);
console.log(new Foo(-2) + new Foo(3), 1);
console.log(new Foo(-21) + new Foo(-7), -28);
console.log(new Foo(1.5) + new Foo(0.2), 1.7);