function rakeGarden(garden) {
    return garden
        .split(" ")
        .map((item) => item === "rock" ? "rock" : "gravel")
        .join(" ");
}

function rakeGarden(garden) {
    return garden.replace(/\b((?!\b(gravel|rock)\b)\w+)\b/g, 'gravel')
}

let garden1 =
    "slug spider rock gravel gravel gravel gravel gravel gravel gravel";
console.log(rakeGarden(garden1)); // 'gravel gravel rock gravel gravel gravel gravel gravel gravel gravel'

let garden2 =
    "gravel gravel gravel gravel gravel gravel gravel gravel gravel rock slug ant gravel gravel snail rock gravel gravel gravel gravel gravel gravel gravel slug gravel ant gravel gravel gravel gravel rock slug gravel gravel gravel gravel gravel snail gravel gravel rock gravel snail slug gravel gravel spider gravel gravel gravel gravel gravel gravel gravel gravel moss gravel gravel gravel snail gravel gravel gravel ant gravel gravel moss gravel gravel gravel gravel snail gravel gravel gravel gravel slug gravel rock gravel gravel rock gravel gravel gravel gravel snail gravel gravel rock gravel gravel gravel gravel gravel spider gravel rock gravel gravel";
console.log(rakeGarden(garden2)); //  'gravel gravel gravel gravel gravel gravel gravel gravel gravel rock gravel gravel
// gravel gravel gravel rock gravel gravel gravel gravel gravel gravel gravel gravel
// gravel gravel gravel gravel gravel gravel rock gravel gravel gravel gravel gravel
// gravel gravel gravel gravel rock gravel gravel gravel gravel gravel gravel gravel
// gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel
// gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel
// gravel gravel gravel gravel gravel gravel rock gravel gravel rock gravel gravel
// gravel gravel gravel gravel gravel rock gravel gravel gravel gravel gravel gravel
// gravel rock gravel gravel'
