function killcount(counselors, jason){
    return counselors.reduce( (acc, curr) => {
        if (curr[1] < jason) acc.push(curr[0]);
        return acc;
    }, []);
}

let counselors = [["Mike", 7],["Alysa", 3]];
console.log(killcount(counselors, 7), ["Alysa"]);