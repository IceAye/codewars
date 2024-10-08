function strCount(str , letter) {
    let counter = str.split('').filter(item => item === letter);
    return counter.length;
}