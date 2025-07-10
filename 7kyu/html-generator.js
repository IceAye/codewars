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

let g = new HTMLGen();

console.log(g.div("test") === "<div>test</div>");
console.log(g.b("test") === "<b>test</b>");
