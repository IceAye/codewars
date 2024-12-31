//preload variable: dict

const makeBackronym = function (string) {
    let result = [];
    for (const part of string.split('')) {
        result.push(dict[part])
    }
    return result.join('')
};
