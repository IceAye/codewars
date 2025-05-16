function kebabize(str) {
    return str[0].toLowerCase() + str.slice(1).replace(/[A-Z]/g, c =>  `-${c.toLowerCase()}`).replace(/[0-9]/g, "")
}

function kebabize(str) {
    return str.replace(/\d/g, "").split(/(?=[A-Z])/g).join('-').toLowerCase();
}

console.log(kebabize('MyCamelCasedString')) // 'my-camel-cased-string'
console.log(kebabize('myCamelCasedString')) // 'my-camel-cased-string'
console.log(kebabize('MyCamelHas3Humps')) // 'my-camel-has-humps'
console.log(kebabize('myCamelHas3Humps')) // 'my-camel-has-humps'
console.log(kebabize('CAMEL')) // 'c-a-m-e-l'
console.log(kebabize('cAMEL')) // 'c-a-m-e-l'
console.log(kebabize('AbstractSingletonProxyFactoryBean')) // 'abstract-singleton-proxy-factory-bean'
console.log(kebabize('abstractSingletonProxyFactoryBean')) // 'abstract-singleton-proxy-factory-bean'