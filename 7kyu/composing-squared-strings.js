function compose(s1, s2) {
    let result = [];
    let string1 = s1.split('\n');
    let string2 = s2.split('\n');

    for (let i = 0; i < string1.length; i++) {
        result.push(string1[i].slice(0, i + 1) + string2.at(-1 - i).slice(0, string2.length - i));
    }

    return result.join('\n');
}

console.log(compose("byGt\nhTts\nRTFF\nCnnI", "jIRl\nViBu\nrWOb\nNkTB")) // "bNkTB\nhTrWO\nRTFVi\nCnnIj"
console.log(compose("HXxA\nTGBf\nIPhg\nuUMD", "Hcbj\nqteH\nGbMJ\ngYPW")) // "HgYPW\nTGGbM\nIPhqt\nuUMDH"
console.log(compose("tSrJ\nOONy\nsqPF\nxMkB", "hLqw\nEZuh\nmYFl\nzlYf")) // "tzlYf\nOOmYF\nsqPEZ\nxMkBh"