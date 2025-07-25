// ❓ DESCRIPTION:
// Another rewarding day in the fast-paced world of WebDev. Man, you love your job! But as with any job, somtimes things can get a little tedious. Part of the website you're working on has a very repetitive structure, and writing all the HTML by hand is a bore. Time to automate! You want to write some functions that will generate the HTML for you.
//
// To organize your code, make of all your functions methods of a class called HTMLGen. Tag functions should be named after the tag of the element they create. Each function will take one argument, a string, which is the inner HTML of the element to be created. The functions will return the string for the appropriate HTML element.

// ✅ SOLUTION:
function HTMLGen() {
    this.div = function (value) {
        return `<div>${value}</div>`;
    }
    this.b = function (value) {
        return `<b>${value}</b>`
    }
    this.a = function (value) {
        return `<a>${value}</a>`
    }
    this.p = function (value) {
        return `<p>${value}</p>`
    }
    this.body = function (value) {
        return `<body>${value}</body>`
    }
    this.span = function (value) {
        return `<span>${value}</span>`
    }
    this.title = function (value) {
        return `<title>${value}</title>`
    }
    this.comment = function (value) {
        return `<!--${value}-->`
    }
}

// 📌 TESTCASE:
let g = new HTMLGen();

console.log(g.div("test") === "<div>test</div>");
console.log(g.b("test") === "<b>test</b>");
