String.prototype.toAlternatingCase = function () {
    let word = [];
    for (let i = 0; i < this.length; i++) {
        if (this.charAt(i) === this.charAt(i).toUpperCase()) {
            word.push(this.charAt(i).toLowerCase());
        } else if (this.charAt(i) === this.charAt(i).toLowerCase()) {
            word.push(this.charAt(i).toUpperCase());
        }
    }
    return word.join('');
}