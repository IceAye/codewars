function capitalsFirst(str){
    const array = str.split(' ');
    const capitals =  array.filter(word => /[A-Z]/.test(word[0]));
    const others = array.filter(word =>  /[a-z]/.test(word[0]));
    return [...capitals, ...others].join(' ');
}

console.log(capitalsFirst("hey You, Sort me Already!"), "You, Sort Already! hey me")