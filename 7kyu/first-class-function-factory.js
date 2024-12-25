function factory(x){
    return (args) => {
        return args.map(element => element * x);
    }
}