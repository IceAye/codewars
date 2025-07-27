function zombieShootout(zombies, range, ammo) {
    let z = zombies;
    let r = range;
    let a = ammo;
    let shotsFired = 0;

    while (z > 0 && r > 0 && a > 0) {
        z -= 1;
        shotsFired += 1;
        a -= 1;

        if (z > 0) {
            r -= 0.5;
            if (r <= 0) {
                return `You shot ${shotsFired} zombies before being eaten: overwhelmed.`;
            }
        }
    }

    if (z === 0) {
        return `You shot all ${shotsFired} zombies.`;
    } else if (a === 0) {
        return `You shot ${shotsFired} zombies before being eaten: ran out of ammo.`;
    } else {
        return `You shot ${shotsFired} zombies before being eaten: overwhelmed.`;
    }
}

function zombieShootout(zombies, range, ammo, shotsFired = 0) {
    if (!zombies) return `You shot all ${shotsFired} zombies.`
    if (!range) return `You shot ${shotsFired} zombies before being eaten: overwhelmed.`
    if (!ammo) return `You shot ${shotsFired} zombies before being eaten: ran out of ammo.`
    return zombieShootout(zombies - 1, range - 0.5, ammo - 1, shotsFired + 1);
}

console.log(zombieShootout(3, 10, 10), "You shot all 3 zombies.");
console.log(zombieShootout(100, 8, 200), "You shot 16 zombies before being eaten: overwhelmed.");
console.log(zombieShootout(50, 10, 8), "You shot 8 zombies before being eaten: ran out of ammo.");