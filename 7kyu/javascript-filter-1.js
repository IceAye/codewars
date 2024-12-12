function searchNames( logins ){
    return logins.filter(item => item[0].endsWith('_'));
}

console.log(searchNames( [ [ "foo", "foo@foo.com" ], [ "bar_", "bar@bar.com" ] ])) // [ [ "bar_", "bar@bar.com" ] ]