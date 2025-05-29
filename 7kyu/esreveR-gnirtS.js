String.prototype.reverse = function ()  {
    return [...this].reduceRight((acc, curr) => acc + curr, '');
}

String.prototype.reverse = function ()  {
    return [...this].reverse().join('');
}
