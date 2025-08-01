const paginationText = function(pageNumber, pageSize, totalProducts){
    const from = (pageNumber - 1) * pageSize + 1;
    const to = pageNumber * pageSize;
    return `Showing ${from} to ${to > totalProducts ? totalProducts : to} of ${totalProducts} Products.`;
}

console.log(paginationText(1,10,30),"Showing 1 to 10 of 30 Products.")
console.log(paginationText(3,10,26),"Showing 21 to 26 of 26 Products.")
console.log(paginationText(1,10,8),"Showing 1 to 8 of 8 Products.")
console.log(paginationText(2,30,350),"Showing 31 to 60 of 350 Products.")
console.log(paginationText(1,23,30),"Showing 1 to 23 of 30 Products.")
console.log(paginationText(2,23,30),"Showing 24 to 30 of 30 Products.")
console.log(paginationText(43,15,3456),"Showing 631 to 645 of 3456 Products.")