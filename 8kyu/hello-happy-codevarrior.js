function Warrior(n){
    let name = n;
    this.name = function(n){
        if(n) name = n;
        return name;
    }
}

Warrior.prototype.toString = function(){
    return "Hi! my name's "+this.name();
}

let albert = new Warrior("Albert")
let boris  = new Warrior("Boris")

console.log(albert.toString());
console.log(boris.toString());
console.log(albert.name());
boris.name("Bobo")
console.log(boris.name());