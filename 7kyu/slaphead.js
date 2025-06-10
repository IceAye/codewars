function bald(x) {
    const y = x.replace(/\//g, "-");
    let z = "";

    switch ((x.match(/\//g) || '').length) {
        case 0:
            z = "Clean!";
            break;
        case 1:
            z = "Unicorn!";
            break;
        case 2:
            z = "Homer!";
            break;
        case 3:
        case 4:
        case 5:
            z = "Careless!";
            break;
        default:
            z = "Hobo!";
    }

    return [y, z];
}

console.log(bald("/---------"), ["----------", "Unicorn!"]);
console.log(bald("/-----/-"), ["--------", "Homer!"]);
console.log(bald("--/--/---/-/---"), ["---------------", "Careless!"]);
console.log(bald('-----'));
