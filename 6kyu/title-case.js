function titleCase(title, minorWords) {
    if (title.length === 0) return "";

    if (minorWords !== undefined) {
        let minorArr = minorWords.split(" ").map((item) => item.toLowerCase());
        let titleArr = title
            .split(" ")
            .map((item) =>
                minorArr.includes(item.toLowerCase())
                    ? item.toLowerCase()
                    : item[0].toUpperCase() + item.slice(1).toLowerCase(),
            )
            .join(" ");
        return titleArr[0].toUpperCase() + titleArr.slice(1);
    } else {
        return title
            .split(" ")
            .map((item) => item[0].toUpperCase() + item.slice(1).toLowerCase())
            .join(" ");
    }
}

console.log(titleCase(""));
console.log(titleCase("a clash of KINGS", "a an the of"));
console.log(titleCase("THE WIND IN THE WILLOWS", "The In"));
console.log(titleCase("the quick brown fox", "The In"));
