function getSectionIdFromScroll(scrollY, sizes) {
    let sum = 0;

    for (let i = 0; i < sizes.length; i++) {
        sum += sizes[i];
        if (scrollY < sum) return i;
    }

    return scrollY >= sum ? -1 : sum;
}

function getSectionIdFromScroll(scrollY, sizes) {
    let sum = 0;
    return sizes.findIndex(size => scrollY < (sum += size));
}

console.log(getSectionIdFromScroll(299, [300, 200, 400, 600, 100]), 0);
console.log(getSectionIdFromScroll(300, [300, 200, 400, 600, 100]), 1);
console.log(getSectionIdFromScroll(1600, [300, 200, 400, 600, 100]), -1);
