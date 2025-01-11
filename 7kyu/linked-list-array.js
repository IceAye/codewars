const listToArray = (list, result = []) => {
    for (const key in list) {
        if (key === "value") result.push(list[key]);
        if (key === "next") listToArray(list[key], result);
    }
    return result;
};

const list1 = { value: 1, next: { value: 2, next: { value: 3, next: null } } };
const list2 = { value: "foo", next: { value: "bar", next: null } };

console.log(listToArray(list1)); // [1, 2, 3]
console.log(listToArray(list2)); // ["foo", "bar"]