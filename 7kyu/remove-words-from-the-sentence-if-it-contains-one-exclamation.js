function remove(string) {
    return string
        .split(" ")
        .filter((el) => !/^[^!]*![^!]*$/.test(el))
        .join("");
}
