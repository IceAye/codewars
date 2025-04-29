class MarioAdapter {
    constructor(mario) {
        this.mario = mario
    }

    attack(target) {
        return target.health -= this.mario.jumpAttack();
    }
}