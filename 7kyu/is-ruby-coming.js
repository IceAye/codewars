function isRubyComing(list) {
    return list.some(item => item.language === "Ruby");
}

console.log(isRubyComing(list1));
console.log(isRubyComing(list2));