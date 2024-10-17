// SOLUTION 1:
function stockList(books, categories) {
    if (books.length === 0 || categories.length === 0) return "";

    let map = new Map();
    for (const category of categories) {
        map.set(category, 0)
    }

    for (let book of books) {
        book = book.split(" ");
        let category = book[0][0];
        let quantity = +book[1];
        if (categories.includes(category)) map.set(category, (map.get(category) + quantity))
    }
    return [...map.entries()].map(item => `(${item[0]} : ${item[1]})`).join(" - ")
}

// SOLUTION 2:
function stockList(books, categories) {
    if (books.length === 0 || categories.length === 0) return "";

    return categories.map(category => `(${category} : ${books.reduce((acc, book) => {
        if (book[0] === category) acc += +book.split(" ")[1];
        return acc
    }, 0)})`).join(" - ")
}


console.log(stockList(["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"],
    ["A", "B", "C", "D"]));
console.log(stockList( ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"],
    ["A", "B"]));console.log(stockList( ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"],
    []));
