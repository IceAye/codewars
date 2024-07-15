function domainName(url){
    return url.replace(/.+\/\/|www.|\..+/g, '')
}

console.log(domainName("http://google.com"))
console.log(domainName("http://google.co.jp"))
console.log(domainName("www.xakep.ru"))
console.log(domainName("https://youtube.com"))
