function getOrder(input) {
    const order = {
        burger: 0,
        fries: 0,
        chicken: 0,
        pizza: 0,
        sandwich: 0,
        onionrings: 0,
        milkshake: 0,
        coke: 0,
    };

    input.replace(
        /burger|milkshake|pizza|chicken|fries|coke|onionrings|sandwich/g, c => (order[c] += 1),
    );

    const output = [];

    for (const item in order) {
        while (order[item] > 0) {
            const menuItem = item[0].toUpperCase() + item.slice(1);
            output.push(menuItem);
            order[item]--;
        }
    }

    return output.join(" ");
}

console.log(
    getOrder("milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"),
    "Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke",
);
console.log(
    getOrder("pizzachickenfriesburgercokemilkshakefriessandwich"),
    "Burger Fries Fries Chicken Pizza Sandwich Milkshake Coke",
);
