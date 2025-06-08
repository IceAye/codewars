function zipvalidate(postcode){
    return /^[12346]\d{5}$/.test(postcode);
}


console.log(zipvalidate( '198328' ))
console.log(zipvalidate( '310003' ))
console.log(zipvalidate( '424000' ))
console.log(zipvalidate( '12A483' ))
console.log(zipvalidate( '1@63' ))
console.log(zipvalidate( '111' ))
console.log(zipvalidate( '056879' ))
console.log(zipvalidate( '1111111' ))