// SOLUTION 1:
function removeUrlAnchor(url){
    return url.indexOf('#') === -1 ? url : url.slice(0, url.indexOf('#'))
}

// SOLUTION 2:
function removeUrlAnchor(url){
    return url.split('#')[0];
}