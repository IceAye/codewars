function doubles(s){
    let temp = '';
    while (s !== temp) {
        temp = s;
        s = s.replace(/(.)\1/g, '');
    }
    return s;
}

console.log(doubles('abbbzz'),'ab')
console.log(doubles('zzzzykkkd'),'ykd')
console.log(doubles('abbcccdddda'),'aca')
console.log(doubles('vvvvvoiiiiin'),'voin')
console.log(doubles('rrrmooomqqqqj'),'rmomj')
console.log(doubles('xxbnnnnnyaaaaam'),'bnyam')
console.log(doubles("abbbcc"),'ab')