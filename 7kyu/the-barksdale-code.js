function decode(string) {
    const code = [5,9,8,7,6,0,4,3,2,1];
    return string.replace(/\d/g, c => code[c]);
}

let phoneNumbers = {
    "4103432323": "6957678787",
    "4103438970": "6957672135",
    "4104305768": "6956750342",
    "4102204351": "6958856709",
    "4107056043": "6953504567",
    "4105753410": "6950307695"
};

for (let code in phoneNumbers) {
    console.log(decode(code), phoneNumbers[code]);
}