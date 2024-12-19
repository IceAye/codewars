function doubleEveryOther(a) {
    return a.map((item, index) => (index % 2 === 1 ? item * 2 : item));
}

console.log(doubleEveryOther([1, 2, 3, 4])); // [1,4,3,8]