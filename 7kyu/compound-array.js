function compoundArray(a, b) {
    const result = [];
    let i = 0;
    while (i <= a.length && i <= b.length) {
        if (a[i] === undefined) {
            result.push(...b.slice(i));
            break;
        }
        if (b[i] === undefined) {
            result.push(...a.slice(i));
            break;
        }
        result.push(a[i], b[i])
        i++;
    }
    return result;
}

console.log(compoundArray([11, 12], [21, 22, 23, 24]), [11, 21, 12, 22, 23, 24]);
console.log(compoundArray([2147483647,2147483646,2147483645,2147483644,2147483643], [9]), [2147483647,9,2147483646,2147483645,2147483644,2147483643]);
console.log(compoundArray([214,215,216,217,218], []), [214,215,216,217,218]);
console.log(compoundArray([], [314,315,316,317,318]), [314,315,316,317,318]);