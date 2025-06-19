function testit(s){
    return s.replace(/\w\b/g, c => c.toUpperCase());
}