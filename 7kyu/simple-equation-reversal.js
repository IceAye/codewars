function solve(eq){
    return eq.split(/([*+\-/])/).reverse().join('');
}

console.log(solve("100*b/y"),"y/b*100");
console.log(solve("a+b-c/d*30"),"30*d/c-b+a");
console.log(solve("a*b/c+50"),"50+c/b*a");