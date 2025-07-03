// ❓ DESCRIPTION:
// Some new cashiers started to work at your restaurant.
//
// They are good at taking orders, but they don't know how to capitalize words, or use a space bar!
//
// All the orders they create look something like this:
//
// "milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"
//
// The kitchen staff are threatening to quit, because of how difficult it is to read the orders.
//
// Their preference is to get the orders as a nice clean string with spaces and capitals like so:
//
// "Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke"
//
// The kitchen staff expect the items to be in the same order as they appear in the menu.
//
// The menu items are fairly simple, there is no overlap in the names of the items:
//
// 1. Burger
// 2. Fries
// 3. Chicken
// 4. Pizza
// 5. Sandwich
// 6. Onionrings
// 7. Milkshake
// 8. Coke
//
// ✅ SOLUTION 1:
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

// 📗 SOLUTION 2:
function getOrder(input) {
    const menu = ["Burger", "Fries", "Chicken", "Pizza", "Sandwich", "Onionrings", "Milkshake", "Coke"];
    const correctMenuItem = (item) => item[0].toUpperCase() + item.slice(1);
    const correctOrder = (a, b) => menu.indexOf(a) - menu.indexOf(b);

    return input.match(new RegExp(menu.join("|"), "gi")).map(item => correctMenuItem(item)).sort(correctOrder).join(" ");
}

// 📌 TESTCASE:
console.log(
    getOrder("milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"),
    "Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke",
);
console.log(
    getOrder("pizzachickenfriesburgercokemilkshakefriessandwich"),
    "Burger Fries Fries Chicken Pizza Sandwich Milkshake Coke",
);
