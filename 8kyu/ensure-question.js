function ensureQuestion(s) {
    return s.endsWith("?") ? s : s + "?";
}

console.log(ensureQuestion("Yes"));
console.log(ensureQuestion("No?"));
console.log(ensureQuestion(""));
