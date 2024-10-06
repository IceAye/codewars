function enough(cap, on, wait) {
    let spare = cap - on;
    return spare >= wait ? 0 : wait - spare;
}