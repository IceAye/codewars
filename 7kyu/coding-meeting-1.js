// ❓ DESCRIPTION:
// You will be given an array of objects (hashes in ruby) representing data about developers who have signed up to attend the coding meetup that you are organising for the first time.
//
// Your task is to return the number of JavaScript developers coming from Europe.
// If, there are no JavaScript developers from Europe then your function should return 0.
//
// ✅ SOLUTION:
function countDevelopers(list) {
    let count = 0;
    for (const item of list) {
        if (item.language === "JavaScript" && item.continent === "Europe") count++;
    }
    return count;
}