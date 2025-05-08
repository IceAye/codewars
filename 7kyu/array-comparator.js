function matchArrays(v,r){
    let result = 0;
    let set = new Set(v);

    for (const item of r) {
        if (set.has(item)) result++;
    }

    return result;
}

console.log(matchArrays(['Perl','Closure','JavaScript'],['Go', 'C++','Erlang']),0);
console.log(matchArrays(['incapsulation','OOP','array'],['time', 'propert','paralelism','OOP']),1);
console.log(matchArrays([1,2,3,4,5],[2,3,4,5,6]),4);
