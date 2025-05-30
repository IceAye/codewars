function borrow(s){
    return s.replace(/\W/g, '').toLowerCase();
}

console.log(borrow('WhAt! FiCK! DaMn CAke?'), 'whatfickdamncake');
console.log(borrow('THE big PeOpLE Here!!'), 'thebigpeoplehere');
console.log(borrow('i AM a TINY BoY!!'), 'iamatinyboy');