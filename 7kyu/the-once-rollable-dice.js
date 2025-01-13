function Character(name, opness) {
    this.name = name;
    this.opness = opness;
    this.attack = () => this.opness + ~~((Math.random() * this.opness));
}