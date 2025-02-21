function remove (string) {
    return string.replace(/!+/g, "") + "!"
}

function remove (string) {
    return string.split("!").join("") + "!";
}