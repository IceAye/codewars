String.prototype.reverse = function ()  {
    return [...this].reduceRight((acc, curr) => acc + curr, '');
}