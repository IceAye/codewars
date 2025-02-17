function areYouPlayingBanjo(name) {
    initialName = name.toLowerCase();
    return initialName[0] === 'r' ? name + " plays banjo" : name + " does not play banjo";
}