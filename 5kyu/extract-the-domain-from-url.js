// ❓ DESCRIPTION
// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string.
//
// ✅ SOLUTION:
function domainName(url){
    return url.replace(/.+\/\/|www.|\..+/g, '')
}

console.log(domainName("http://google.com"))
console.log(domainName("http://google.co.jp"))
console.log(domainName("www.xakep.ru"))
console.log(domainName("https://youtube.com"))
