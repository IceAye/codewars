let SequenceSum = (function() {
    function SequenceSum() {

    }

    SequenceSum.showSequence = function(count) {
        let sum = 0;
        let result = ""
        let i = 0;
        if (count === 0) return "0=0"
        if (count < 0) return `${count}<0`
        while (i <= count) {
            sum += i;
            if (i < count) {
                result += i + "+";
            } else result += i;
            i++;
        }
        result += ` = ${sum}`
        return result;
    };
    return SequenceSum;
})();

console.log(SequenceSum.showSequence(6));
console.log(SequenceSum.showSequence(0));
console.log(SequenceSum.showSequence(-15));
