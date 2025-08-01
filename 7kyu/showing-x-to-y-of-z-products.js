// ❓ DESCRIPTION:
// A category page displays a set number of products per page, with pagination at the bottom allowing the user to move from page to page.
// Given that you know the page you are on, how many products are in the category in total, and how many products are on any given page, how would you output a simple string showing which products you are viewing..
//
// Examples
// In a category of 30 products with 10 products per page, on page 1 you would see
// 'Showing 1 to 10 of 30 Products.'
// In a category of 26 products with 10 products per page, on page 3 you would see
// 'Showing 21 to 26 of 26 Products.'
// In a category of 8 products with 10 products per page, on page 1 you would see
// 'Showing 1 to 8 of 8 Products.'

// ✅ SOLUTION:
const paginationText = function(pageNumber, pageSize, totalProducts){
    const from = (pageNumber - 1) * pageSize + 1;
    const to = pageNumber * pageSize;
    return `Showing ${from} to ${to > totalProducts ? totalProducts : to} of ${totalProducts} Products.`;
}

// 📌 TESTCASE:
console.log(paginationText(1,10,30),"Showing 1 to 10 of 30 Products.")
console.log(paginationText(3,10,26),"Showing 21 to 26 of 26 Products.")
console.log(paginationText(1,10,8),"Showing 1 to 8 of 8 Products.")
console.log(paginationText(2,30,350),"Showing 31 to 60 of 350 Products.")
console.log(paginationText(1,23,30),"Showing 1 to 23 of 30 Products.")
console.log(paginationText(2,23,30),"Showing 24 to 30 of 30 Products.")
console.log(paginationText(43,15,3456),"Showing 631 to 645 of 3456 Products.")