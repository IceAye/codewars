function uncensor(infected, discovered) {
    if (discovered.length === 0) return  infected;
    let i = -1;
    return infected.replace(/\*/g, char => discovered[++i]);
}

console.log(uncensor('*h*s *s v*ry *tr*ng*', 'Tiiesae')) // 'This is very strange'
console.log(uncensor('A**Z*N*', 'MAIG')) // 'AMAZING'
console.log(uncensor('xyz', '')) // 'xyz'