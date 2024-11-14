function stray(numbers) {
    let sort = numbers.sort((a, b) => a - b)
    return sort[0] === sort[1] ? sort.at(-1) : sort[0]
}