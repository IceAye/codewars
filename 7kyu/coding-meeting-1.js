function countDevelopers(list) {
    let count = 0;
    for (const item of list) {
        if (item.language === "JavaScript" && item.continent === "Europe") count++;
    }
    return count;
}